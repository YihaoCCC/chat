<template>
    <div class="chat-container">
        <div class="header">
            <div class="logo">
                <svg viewBox="0 0 513 513" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M256.025.05C117.67-2.678 3.184 107.038.025 245.383a240.703 240.703 0 0085.333 182.613v73.387c0 5.891 4.776 10.667 10.667 10.667a10.67 10.67 0 005.653-1.621l59.456-37.141a264.142 264.142 0 0094.891 17.429c138.355 2.728 252.841-106.988 256-245.333C508.866 107.038 394.38-2.678 256.025.05z" />
                    <path
                        d="M330.518 131.099l-213.825 130.08c-7.387 4.494-5.74 15.711 2.656 17.97l72.009 19.374a9.88 9.88 0 007.703-1.094l32.882-20.003-10.113 37.136a9.88 9.88 0 001.083 7.704l38.561 63.826c4.488 7.427 15.726 5.936 18.003-2.425l65.764-241.49c2.337-8.582-7.092-15.72-14.723-11.078zM266.44 356.177l-24.415-40.411 15.544-57.074c2.336-8.581-7.093-15.719-14.723-11.078l-50.536 30.744-45.592-12.266L319.616 160.91 266.44 356.177z"
                        fill="#fff" />
                </svg>
            </div>
            <div class="userInfo">
                <div class="theme">
                    <svg viewBox="0 0 16 16" class="bi bi-sun-fill" fill="currentColor" width="23"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
                            color="red"></path>
                    </svg>
                    <label class="switch btn-color-mode-switch">
                        <input value="1" id="color_mode" name="color_mode" type="checkbox" @click="darkModelChange">
                        <label class="btn-color-mode-switch-inner" data-off="Light" data-on="Dark" for="color_mode"></label>
                    </label>
                    <svg viewBox="0 0 16 16" class="bi bi-moon-stars-fill" fill="currentColor" width="23"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
                            color="orange"></path>
                        <path
                            d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"
                            color="black"></path>
                    </svg>
                </div>
                <div class="name">
                    小奕
                </div>
                <div class="avtar">
                    <img src="https://joesch.moe/api/v1/jon" alt="">
                </div>
            </div>
        </div>
        <div class="chat-body" ref="ChatBody">
            <div class="chat-header">
                <div class="name">
                    Chat Home
                </div>
                <div class="staus">
                    🟢
                    <span> online</span>
                </div>
            </div>
            <div class="me conversation">
                <div class="words">
                    这是我说的话
                </div>
                <div class="avtar">
                    <img src="https://joesch.moe/api/v1/jordan" alt="">
                </div>
            </div>
            <div class="chater conversation">
                <div class="avtar">
                    <img src="https://joesch.moe/api/v1/jenni" alt="">
                </div>
                <div class="words">
                    来自服务器的信息
                </div>

            </div>
            
        </div>
        <div class="footer">
                <emoji class="emoji" v-if="showEmoji" @sendEmoji="getEmoji"></emoji>    
                <el-icon :size="20" style="cursor: pointer;" @click="showEmoji = !showEmoji">
                    <PictureRounded />
                </el-icon>
                
                <div class="input-box">
                    <input  placeholder="Type Your Message Here" @keydown.enter="sendMessage" required v-model="myInputWords">
                </div>
                <div class="send">
                    <button @click="sendMessage">
                        <div class="svg-wrapper-1">
                            <div class="svg-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                            </svg>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
    </div>
    
</template>
<script lang="ts" setup>
import { ref, onMounted  } from 'vue'
import { getCurrentInstance } from 'vue'
import Emoji from '../components/emoji.vue';
import { createWebSocket, sendSock } from '../request/socket'

const ChatBody = ref()
const { proxy }: any = getCurrentInstance()
const myInputWords = ref()
const showEmoji = ref(false)

onMounted(() => {
    ChatBody.value = document.querySelector('.chat-body')
    createWebSocket(global_callback)
})
const global_callback = (msg: any) => {
    // console.log(msg)
//   console.log("websocket的回调函数收到服务器信息：" + JSON.stringify(msg));
  console.log("收到服务器信息：" + msg);
  if(msg) {
    proxy.$ElNotification({
    title: "您有一条新的消息",
    message: msg,
    position: "bottom-right",
  });
  let html: string = `
          <div class="avtar">
            <img src="https://joesch.moe/api/v1/random" alt="">
          </div> 
          <div class="words">
              ${msg}
          </div>`
        const wordDiv = document.createElement('div');
        wordDiv.classList.add('chater', 'conversation')
        wordDiv.innerHTML = html
        ChatBody.value!.appendChild(wordDiv)
  }
};
const sendMessage = (e: Event) => {
    console.log((<HTMLInputElement>e.target).value)
    if(myInputWords.value) {
        let html: string = `<div class="words">
              ${myInputWords.value}
          </div>
          <div class="avtar">
            <img src="https://joesch.moe/api/v1/random" alt="">
          </div> `
        const wordDiv = document.createElement('div');
        wordDiv.classList.add('me', 'conversation')
        wordDiv.innerHTML = html
        ChatBody.value!.appendChild(wordDiv)
        sendSock(myInputWords.value)
        myInputWords.value = ''
    } else {
        proxy.$ElNotification({
            title: '哎哟，你干嘛',
            message: '不能发送空的信息',
            type: 'warning',
        })
    }
    scrollDom()
}
const darkModelChange = (e: Event) => {
    console.log()
    if ((<HTMLInputElement>e.target).checked) {
        document.body.classList.add('dark-mode')
    } else {
        document.body.classList.remove('dark-mode')
    }
}

const scrollDom = () => {
    if(ChatBody.value.scrollHeight <= ChatBody.value.clientHeight) return
    ChatBody.value.scrollTop += 61
}

const getEmoji = (payload:any) => {
    myInputWords.value = myInputWords.value || '' + payload
}
</script>   

<style lang="scss">
@import '../theme/page/home.scss';
</style>