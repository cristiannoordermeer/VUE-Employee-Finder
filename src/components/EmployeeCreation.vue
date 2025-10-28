<script>
  import EmployeeCard from '../components/EmployeeCard.vue'
  import { EmployeeService } from '../services/employeeService'

  export default {
    emits: ['created'],
    data() {
        return {
            skills: [],
            name: ''
        }
    },
    methods: {
      async postEmployee() {
        debugger;
        try {
          const res = await EmployeeService.createEmployee({name: this.name, skills: this.skills});
          const data = res.data;
        } catch {
          alert("failed to createt employee");
        }
      },
      async createEmployee() {
        if (!this.name.length || !this.skills.length) {
            return;
        }
        await this.postEmployee();
        this.$emit('created', 'true')
      }
    },
  }
</script>

<template>
    <div class="simple-form">
        <h3>Name</h3>
        <input v-model="name" placeholder="Employee Full Name" />

        <h3>Check Skills</h3>
        <div>
            <input type="checkbox" id="Java" value="Java" v-model="skills" />
            <label for="Java">Java</label>
        </div>
        <div>
            <input type="checkbox" id="Kotlin" value="Kotlin" v-model="skills" />
            <label for="Kotlin">Kotlin</label>
        </div>
        <div>
            <input type="checkbox" id="Angular" value="Angular" v-model="skills" />
            <label for="Angular">Angular</label>
        </div>
        <div>
            <input type="checkbox" id="Vue" value="Vue" v-model="skills" />
            <label for="vue">Vue</label>
        </div>
        <div>
            <input type="checkbox" id="React" value="React" v-model="skills" />
            <label for="React">React</label>
        </div>
        <div>
            <input type="checkbox" id="Net" value=".Net" v-model="skills" />
            <label for="Net">.Net</label>
        </div>
        <button class="create-button" @click="createEmployee">Create Employee</button>
    </div>
</template>

<style scoped>

.simple-form {
    display:flex;
    flex-direction: column;
}

h3 {
  margin-top: 0.4rem;  
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

.create-button {
  background-color: #00bd7e;
  width: 132px;
  height: 32px;
  border: none;
  border-radius: 5px;
  color: #FFF;
  font-weight: 700;
  align-self: end;
  cursor: pointer;
}

label {
    margin-left: 4px;
}
</style>
