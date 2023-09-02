<template>
    <nav class="h-full flex flex-col gap-4 bg-red-700 max-w-sm box-border p-8 min-w-240 overflow-scroll">
        <ul class="flex flex-col gap-3">
            <TheNavbarItem v-for="(tab, index) in navTabs" :key="tab.name" :is-active-tab="index === activeTab"
                :change-active-tab="changeActiveTab" :tab="tab" :placement="index + 1" />
        </ul>
    </nav>
</template>

<script>
import TheNavbarItem from './TheNavbarItem.vue'

export default {
    props: ['navTabs', 'activeTab', 'changeActiveTab'],
    components: {
        TheNavbarItem
    }
}
</script>