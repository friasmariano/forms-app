import useVuelidate from '@vuelidate/core';
import { ref, reactive } from 'vue'
import BasicDataModel from '../models/BasicDataModel'
import BillingAddressModel from '../models/BillingAddressModel'
import CreditCardModel from '../models/CreditCardModel'

export default {
    personal: reactive(new BasicDataModel()),
    billingInfo: reactive(new BillingAddressModel()),
    creditCard: reactive(new CreditCardModel()),
    errorMessage: ref(""),

    toModel() {
        const rules = {
            personal: this.personal.rules,
            billingInfo: this.billingInfo.rules,
            creditCard: this.creditCard.rules
        };

        return useVuelidate(rules, this)
    }
}