import { ref } from 'vue'
import { required } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'
import { cvvValidator, creditcard  } from '@/validators'

export default class CreditCardModel {
    number = ref("")
    name = ref("")
    expirationDate = ref("")
    cvv = ref("")

    clear() {
        this.number.value = ""
        this.name.value = ""
        this.expirationMonth.value = ref("")
        this.expirationYear.value = ref("")
        this.cvv.value = ref("")
    }

    get rules() {
        return {
            number: { creditcard, required },
            name: { required },
            expirationDate: { required },
            cvv: { cvvValidator,required }
        }
    }

    toModel() {
        useVuelidate(this.rules, this)
    }
}