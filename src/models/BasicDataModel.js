import { ref } from 'vue'
import { required } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'
import { dateValidator, phoneValidator } from '@/validators'

export default class BasicDataModel {
    name = ref("")
    lastName = ref("")
    birthDate = ref("")
    phone = ref("")

    clear() {
        this.name.value = ""
        this.lastName.value = ""
        this.birthDate.value = ""
        this.phone.value = ""
    }

    get rules() {
        return { 
            name: { required },
            lastName: { required },
            birthDate: { dateValidator },
            phone: { phoneValidator, required }
        }
    }

    toModel() {
        return useVuelidate(this.rules, this)
    }
}