<template>
    <div class="emoji">
        <div class="emoji-item" v-for="(item, index) in emojiData" :key="index" @click="getEmoji(item)">
            {{ item }}
        </div>
    </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import emojiJson from '../plugins/emoji.json'
const emits = defineEmits(['sendEmoji'])

const emojiData = ref([])
onMounted(() => {
    console.log(emojiData)
    emojiData.value = emojiJson.data.split(',') as any
    console.log(emojiData.value)
})

const getEmoji = (payload:any) => {
    console.log(payload)
    emits('sendEmoji', payload)
}

</script>
<style lang="scss" scoped>
.emoji {
    width: 300px;
    height: 200px;
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    border: 1px solid var(--border-color);
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
    background-color: var(--theme-bg-color);
    
    .emoji-item {
        width: 26px;
        height: 26px;
        text-align: center;
        cursor: pointer;
        transition: all .2s ease-in;
        &:hover {
            transform: scale(1.2);
        }
    }
}
</style>