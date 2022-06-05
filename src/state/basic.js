import { ref, reactive } from 'vue'
import BasicDataModel from '../models/BasicDataModel'

export default {
    personal: reactive(new BasicDataModel()),
    errorMessage: ref("")
}