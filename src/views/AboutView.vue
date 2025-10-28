<script>
  import EmployeeCard from '../components/EmployeeCard.vue'
  import EmployeeCreation from '../components/EmployeeCreation.vue'
  import { EmployeeService } from '../services/employeeService'

  export default {
    components: {
      EmployeeCard,
      EmployeeCreation
    },
    data() {
      return {
        items: [],
        searchString: '',
        creatingFlag: false
      }
    },
    computed: {
      filteredEmployees() {                  // based on search string and current items, we filter the matching employees. if empty string, we return original items
        if (this.searchString.length) { 
          return this.items.filter(x => x.name?.toLowerCase().includes(this.searchString.toLowerCase()) || 
          x.skills.some(x => x.toLowerCase().includes(this.searchString.toLowerCase())))
        } 
        return this.items;
      }
    },
    methods: {
      async fetchEmployees() {
        try {
          const res = await EmployeeService.getEmployees();
          this.items = res.data;
        } catch {
          alert("failed to fetch employees");
        }
      },
      toggleCreation() {
        this.creatingFlag = !this.creatingFlag;
      },
      employeeCreated() {
        this.fetchEmployees();
        this.toggleCreation();
      }
    },
    mounted() {
      this.fetchEmployees();
    }
  }
</script>

<template>
  <div class="about">
    <div v-if="creatingFlag">
      <EmployeeCreation @created="() => employeeCreated()"/>
    </div>
    <div v-else>
        <input v-model="searchString" placeholder="Search for Employees" class="search-input"/>
        <EmployeeCard v-for="employee in filteredEmployees" :employee="employee" class="employee-card"/>
    </div>
    <button class="add-button" @click="toggleCreation" v-if="!creatingFlag">Add Employee</button>
  </div>
</template>

<style>

.about {
  display: flex;
  flex-direction: column;
}

.search-input {
  margin-left: 16px;
  margin-bottom: 20px;
}

.employee-card {
  margin-bottom: 10px;
}

.add-button {
  background-color: #00bd7e;
  width: 116px;
  height: 32px;
  border: none;
  border-radius: 5px;
  color: #FFF;
  font-weight: 700;
  align-self: end;
  cursor: pointer;
}
</style>
