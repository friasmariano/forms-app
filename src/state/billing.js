import { reactive } from 'vue'
import BillingAddressModel from '../models/BillingAddressModel'

export default {
    billingInfo: reactive(new BillingAddressModel())
}