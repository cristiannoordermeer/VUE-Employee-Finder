<script setup lang="ts">
    import { computed } from 'vue'
    import type { Employee } from '@/interfaces/employee'
 
    const props = defineProps<{
        employee: Employee
    }>()

    const computedSkills = computed(() => {
        return props.employee.skills.join(' - ');
    })
</script>
<template>
    <div class="details">
      <h3>
        {{employee.name}}
      </h3>
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

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}
</style>
