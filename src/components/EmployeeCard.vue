<script setup lang="ts">
    import { EmployeeService } from '../services/employeeService'
    import SupportIcon from './icons/IconSupport.vue'
    import CloseIcon from './icons/IconClose.vue'
    import { computed } from 'vue'
    import type { Employee } from '@/interfaces/employee'

    const emit = defineEmits(['deleted'])
 
    const props = defineProps<{
        employee: Employee
    }>()

    const computedSkills = computed(() => {
        return props.employee.skills.join(' - ');
    })

    const deleteEmployee = async (employeeId: String) => {
      try {
          const data = await EmployeeService.deleteEmployee(employeeId);
          if (data?.id) {
            emit('deleted');
          } else {
            alert("failed to delete employees");
          }
        } catch {
          alert("failed to delete employee");
        }
    }
</script>
<template>
    <div class="details">
      <div class="header">
        <h3>
          {{employee.name}}
        </h3>
        <i @click="deleteEmployee(employee?.id)">
          <CloseIcon />
        </i>
      </div>
      <p>{{computedSkills}}</p>
    </div>
</template>

<style scoped>
.details {
  width:100%;
  flex: 1;
  margin-left: 1rem;
  border: 1px solid #ebebeba3;
  border-radius: 5px;
  padding: 10px
}

.header {
  display: flex;
  justify-content: space-between;
}

i {
  cursor: pointer;
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}
</style>
