import React from 'react';
import axios from 'axios';

function Confirm({ personalInfo, contactInfo, professionalInfo, bankingAccountInfo, hrinfo }) {
    const { firstName, middleName, lastName, gender, dob, languages, profile_pic, sign_pic } = personalInfo;
    const { email, mobile, address, city, state, postcode, country } = contactInfo;
    const { professionalname, bio, folionumber, profileVideoUrl1, speciality, consultation_fee, profileVideoUrl2, profileVideoUrl3, fb, insta, linkedin, tw, youtube, other } = professionalInfo;
    const { acc_name, houseNumberName, streetName, area, bank_name, branch, acc_number, acc_type, routingNumber, bankSwiftIcd, bankIban, } = bankingAccountInfo;
    // const { full_name, houseNumber, city, state, postalcode, country, email, mobile, emgfull_name, emgaddress, emghouseNumber, emgcity, emgstate, emgpostalcode, emgcountry, emgemail, emgphone, professional_indemnity, dateAdded, li_authority, dateIssue, dateExpiry, docStatus } = hrinfo

    // console.log(hrinfo.full_name)
    const stepperData = {
        email,
        firstName,
        middleName,

        lastName,
        "group": "doctor",
        consultation_fee,

        "profile": {
            dob,
            gender,
            "languages": [languages],
            "sign_pic": profile_pic,
            "address": {
                "houseNumber": address,
                city,
                state,
                "postalcode": postcode,
                country
            },


            "professional_detail": {
                "professional": professionalname
            },
            bio,
            "speciality": [speciality],
            "folioNumber": folionumber,
            "rating": 0,
            "doctorDocuments": hrinfo.docStatus,


            "profileVideoUrl": [profileVideoUrl1, profileVideoUrl2, profileVideoUrl3],
            "social_media": {
                fb,
                insta,
                linkedin,
                tw,
                youtube,
                other
            },
            "bank_detail": {
                acc_name,
                "residential_address": {
                    houseNumberName,
                    streetName,
                    area
                },
                bank_name,
                branch,
                acc_number,
                acc_type,
                routingNumber,
                bankSwiftIcd,
                bankIban
            },
            "hr_info": {
                "full_name": hrinfo.full_name,
                "address":
                {
                    "houseNumber": hrinfo.houseNumber,
                    "city": hrinfo.city,
                    "state": hrinfo.state,
                    "postalcode": hrinfo.postalcode,
                    "country": hrinfo.country
                }
                ,
                "email": hrinfo.email,
                "mobile": hrinfo.mobile,

                "emergencyContact": {
                    "full_name": hrinfo.emgfull_name,
                    "address":
                    {
                        "houseNumber": hrinfo.emghouseNumber,
                        "city": hrinfo.emgcity,
                        "state": hrinfo.emgstate,

                        "postalcode": hrinfo.emgpostalcode,
                        "country": hrinfo.emgcountry
                    }
                    ,
                    "email": hrinfo.emgemail,
                    "mobile": hrinfo.emgphone
                },
                "professional_indemnity": hrinfo.professional_indemnity,

                "dateAdded": hrinfo.dateAdded,
                "license": {
                    "li_authority": hrinfo.li_authority,
                    "dateIssue": hrinfo.dateIssue,
                    "dateExpiry": hrinfo.dateExpiry
                }
            }

        },
        "profile_pic": sign_pic,
        mobile

    }

    const config = {
        method: 'post',
        url: 'http://test-api.doctall.com/api/v1/user/auth/Doctorregister',
        stepperData,

    }

    axios(config)
        .then(data => console.log(data))
        .catch(err => console.log(err))



    console.log(stepperData)
    return (
        <div>
            sucess
        </div>
    )
}

export default Confirm
