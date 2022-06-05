import { ref } from 'vue' 
import { required } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'
import { zipCode } from '@/validators'

export default class BillingAddressModel{
    address = ref("")
    apartment = ref("")
    city = ref("")
    state = ref("")
    zipcode = ref("")

    clear() {
        this.address.value = ""
        this.apartment.value = ""
        this.city.value = ""
        this.state.value = ""
        this.zipcode.value = ""
    }

    get rules() {
        return {
            address: { required },
            apartment: { required },
            city: { required },
            state: { required },
            zipcode: { required, zipCode }
        }
    }

    toModel() {
        return useVuelidate(this.rules, this)
    }
}