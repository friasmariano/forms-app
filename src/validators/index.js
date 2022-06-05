import { isValid } from 'date-fns'
export const creditcard = {
    $validator: value => {
        if (typeof value === 'undefined' || value === null || value === '') {
            return true
        }
        //
        return /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(value)
        // \[-/.]\
    },
    $message: 'Not a valid credit card number.'
}

export const zipCode = {
    $validator: value => {
        if (typeof value === 'undefined' || value === null || value === '') {
            return true
        }
        //
        return /^\d{5}-\d{5}$/.test(value)
        // \[-/.]\
    },
    $message: 'Not a valid zipcode.'
}

export const cvvValidator = {
    $validator: value => {
        if (typeof value === 'undefined' || value === null || value === '') {
            return true
        }
        //
        return /^\d{3}$/.test(value)
        // \[-/.]\
    },
    $message: 'Not a valid cvv.'
}

export const phoneValidator = {
    $validator: value => {
        if (typeof value === 'undefined' || value === null || value === '') {
            return true
        }
        //
        return /^\d{3}-\d{3}-\d{4}$/.test(value)
        // \[-/.]\
    },
    $message: 'Not a valid phone number.'
}

export const dateValidator = {
    $validator: value => {
        // if (!isValid(new Date(value))) {
        //     return true
        // }
        return isValid(new Date(value))
    },
    $message: 'Date is not valid'
}