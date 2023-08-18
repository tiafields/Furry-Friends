const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogSchema = new Schema({
    
    humanName: {
        type: String,
        required: true
    },
    address: {
        type: String, 
        required: true 
    }, 
    dogName: {
        type: String,
        required: true
    },
    dogBreed: {
        type: String, 
        required: true
    },
    dogBirthday: {
        type: Date, 
        required: true
    },
    dogNeuteredOrSpayed: {
        type: String, 
        enum: ['Yes', 'No', 'Unknown'],
        required: true 
    },
    dogFriendly: {
        type: String, 
        enum: ['Yes', 'No', 'Unknown'],
        required: true 
    },
    peopleFriendly: {
        type: String,
        enum: ['Yes', 'No', 'Unknown'],
        required: true
    },
    kidFriendly: {
    type: String, 
    enum: ['Yes', 'No', 'Unknown'],
    required: true
    },
    dogFoodBrand: {
        type: String, 
        required: true
    },
    feedingTimes: {
        type: String, 
        required: true
    },
    amountOfFood: {
        type: String,
        required: true
    },
    otherFeedingDetails: {
        type: String,
        required: true
    },
    treatDetails: {
        type: String,
        required: true
    },
    medication: {
        type: String, 
        required: true
    },
    walkingSchedule: {
        type: String, 
        required: true
    },
    letOutDetails: {
        type: String, 
        required: true
    },
    hidingSpotDetails: {
        type: String, 
        required: true
    },
    sleepingLocation: {
        type: String, 
        required: true
    },
    forbiddenAreas: {
        type: String,
        required: true
    }, 
    dogFears: {
        type: String, 
        required: true
    }, 
    dogAllergies: {
        type: String, 
        required: true
    },
    houseDetails: {
        type: String, 
        required: true
    }, 
    otherInfo: {
        type: String,
        required: true
    },
    vetName: {
        type: String, 
        required: true
    },
    vetAddress: {
        type: String, 
        required: true
    },
    vetPhoneNumber: {
        type: String, 
        required: true
    }, 
    boardingName: {
        type: String, 
        required: true
    },
    boardingAddress: {
        type: String, 
        required: true
    },
    boardingPhoneNum: {
        type: String,
        required: true
    },
    emergencyContactName: { 
        type: String, 
        required: true
    },
    emergencyContactRelationship: {
        type: String, 
        required: true
    },
    emergencyContactPhone: {
        type: String, 
        required: true
    }      
   
});

const Dog = mongoose.model('Dog', dogSchema); 
module.exports = Dog; 