<template>
    <div class="reset-password">
        <Modal v-if="modalActive" v-on:close-modal="closeModal" />
        <Loading v-if="loading" />
        <div class="form-wrap">
        <form class="reset">
            <h2>Reset Password</h2>
            <p>Forgot Password? Enter your email to reset it</p>
            <div class="inputs">
                <div class="input">
                    <input type="text" placeholder="Email" v-model="email"/>
                    <email class="icon" />
                </div>
            </div>
            <button>Reset</button>
            <div class="angle"></div>
        </form>
        <div class="background"></div>
    </div>
    </div>
</template>

<script>
import email from "../assets/Icons/envelope-regular.svg"
import Modal from "../components/Modal.vue"
import Loading from "../components/Loading.vue"
export default {
    name: 'Forgot Password',
    components: {
        email,
        Modal,
        Loading,
    },
    methods: {
        closeModal() {
            this.modalActive = !this.modalActive
            this.email = ""
        }
    },
    data () {
        return {
            email: null,
            modalActive: null,
            modalMessage: "",
            loading: null
        }
    }
}
</script>

<style lang="scss" scoped>
.reset-password {
    position: relative;
    .form-wrap {
        .reset {
            h2 {
                margin-bottom: 8px;
            }
            p {
                margin-bottom: 32px;
                text-align: center;
            }
        }
    }
}
</style>