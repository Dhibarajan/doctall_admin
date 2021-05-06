import React from 'react';
import axios from 'axios';
import { Dialog } from '@material-ui/core';
import PleaseWait from './PleaseWait';

function Confirm({ personalInfo, contactInfo, professionalInfo, bankingAccountInfo, hrinfo }) {
    const { firstName, middleName, lastName, gender, dob, languages, profile_pic, sign_pic } = personalInfo;
    const { email, mobile, address, city, state, postcode, country } = contactInfo;
    const { professionalname, bio, folionumber, profileVideoUrl1, speciality, consultation_fee, profileVideoUrl2, profileVideoUrl3, fb, insta, linkedin, tw, youtube, other } = professionalInfo;
    const { acc_name, houseNumberName, streetName, area, bank_name, branch, acc_number, acc_type, routingNumber, bankSwiftIcd, bankIban, } = bankingAccountInfo;
    // const { full_name, houseNumber, city, state, postalcode, country, email, mobile, emgfull_name, emgaddress, emghouseNumber, emgcity, emgstate, emgpostalcode, emgcountry, emgemail, emgphone, professional_indemnity, dateAdded, li_authority, dateIssue, dateExpiry, docStatus } = hrinfo
    const [uplodingStatus, setUploadingStatus] = React.useState(false)
    const [registrationSuccess, setRegistrationSuccess] = React.useState(false)

    const stepperData = JSON.stringify({
        "email": email,
        "firstName": firstName,
        "middleName": middleName,
        "lastName": lastName,
        "group": "doctor",
        "consultation_fee": parseInt(consultation_fee),
        "profile": {
            "dob": dob,
            "gender": gender,
            "languages": [
                languages
            ],
            "sign_pic": sign_pic,
            "address": {
                "houseNumber": address,
                "city": city,
                "state": state,
                "postalcode": parseInt(postcode),
                "country": country
            },
            "professional_detail": {
                "professional": professionalname
            },
            "bio": bio,
            "speciality": [
                speciality
            ],
            "folioNumber": parseInt(folionumber),
            "rating": 0,
            "doctorDocuments": hrinfo.docStatus,
            "profileVideoUrl": [
                profileVideoUrl1,
                profileVideoUrl2,
                profileVideoUrl3

            ],
            "social_media": {
                "fb": fb,
                "tw": tw,
                "insta": insta,
                "linkedin": linkedin,
                "youtube": youtube,
                "other": other
            },
            "bank_detail": {
                "acc_name": acc_name,
                "residential_address": {
                    "houseNumberName": houseNumberName,
                    "streetName": streetName,
                    "area": area
                },
                "bank_name": bank_name,
                "branch": branch,
                "acc_number": acc_number,
                "acc_type": acc_type,
                "routingNumber": routingNumber,
                "bankSwiftIcd": bankSwiftIcd,
                "bankIban": bankIban
            },
            "hr_info": {
                "full_name": hrinfo.full_name,
                "address": {
                    "houseNumber": hrinfo.houseNumber,
                    "city": hrinfo.city,
                    "state": hrinfo.state,
                    "postalcode": parseInt(hrinfo.postalcode),
                    "country": hrinfo.country
                },
                "email": hrinfo.email,
                "mobile": hrinfo.mobile,
                "emergencyContact": {
                    "full_name": hrinfo.emgfull_name,
                    "address": {
                        "houseNumber": hrinfo.houseNumber,
                        "city": hrinfo.city,
                        "state": hrinfo.state,
                        "postalcode": hrinfo.postalcode,
                        "country": hrinfo.country
                    },
                    "email": hrinfo.email,
                    "mobile": hrinfo.emgphone
                },
                "professional_indemnity": true,
                "dateAdded": hrinfo.dateAdded,
                "license": {
                    "li_authority": hrinfo.li_authority,
                    "dateIssue": hrinfo.dateIssue,
                    "dateExpiry": hrinfo.dateExpiry
                }
            }
        },
        "profile_pic": profile_pic,
        "mobile": mobile

    })

    console.log(stepperData)

    const postData = () => {

        // static data is working
        // var data = JSON.stringify({"email":"m.sathishkumar13@gmail.com","firstName":"sFrst","middleName":"mname","lastName":"sLst","group":"doctor","consultation_fee":2000,"profile":{"dob":"12-12-2021","gender":"male","languages":["tamil","english"],"sign_pic":"https://s3.eu-west-1.amazonaws.com/doctall.storage.com/assets/bcf803cf0f8489f09c9ef800cc62ea32.png","address":{"houseNumber":"nush","city":"igdsfuy","state":"igd","postalcode":"663","country":"hdfgy"},"professional_detail":{"professional":"doc"},"bio":"i am a heart","speciality":["heart"],"folioNumber":123448,"rating":0,"doctorDocuments":[{"doc_id":"607e6005495fe6001afd8fd1","doc_type":"education"},{"doc_id":"607e6005495fe6001afd8fd1","doc_type":"educ"}],"profileVideoUrl":["https://s3.eu-west-1.amazonaws.com/doctall.storage.com/assets/bcf803cf0f8489f09c9ef800cc62ea32.png","https://s3.eu-west-1.amazonaws.com/doctall.storage.com/assets/bcf803cf0f8489f09c9ef800cc62ea32.png"],"social_media":{"fb":"http://www.fb.com","tw":"http://www.tw.com","insta":"http://www.insta.com","linkedin":"http://www.lin.com","youtube":"http://www.yt.com","other":"http://www.oth.com"},"bank_detail":{"acc_name":"321565","residential_address":{"houseNumberName":"hgy","streetName":"uy","area":"hgdsvft"},"bank_name":"khdg","branch":"sdhu","acc_number":"ytfty","acc_type":"rtd","routingNumber":"huygy","bankSwiftIcd":"uih","bankIban":"huhu"},"hr_info":{"full_name":"hrs","address":{"houseNumber":"f","city":"igdsfuy","state":"igd","postalcode":55,"country":"uygf7t6"},"email":"hr@gmail.com","mobile":"918899663322","emergencyContact":{"full_name":"duihu","address":{"houseNumber":"sjih","city":"igdsfuy","state":"igd","postalcode":"12","country":"hyud"},"email":"hr@gmail.com","mobile":"98623114488"},"professional_indemnity":true,"dateAdded":"12-04-2021","license":{"li_authority":"uyt7","dateIssue":"08-01-2010","dateExpiry":"09-10-2012"}}},"profile_pic":"https://s3.eu-west-1.amazonaws.com/doctall.storage.com/assets/bcf803cf0f8489f09c9ef800cc62ea32.png","mobile":"918328421346"});


        // Dynamic data is not working


        var config = {
            method: 'post',
            url: 'http://test-api.doctall.com/api/v1/user/auth/Doctorregister',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZlOTE3MGQ1ZjVmYjAwMTQ0MmI2NjMiLCJ1dWlkIjoiQ04tQ0M1MjBDODUiLCJncm91cCI6ImNvbnN1bWVyIiwiZnVsbF9uYW1lIjoic3Mgc3NzIiwic3Vic2NyaXB0aW9uIjpmYWxzZSwiaWF0IjoxNjE3ODU4OTI4fQ.29JtWwv8V1Mv9M4nMfAYfr6C-DYKnNKV6Rvv24VLQ-4'
            },
            data: stepperData
        };
        // setUploadingStatus(true)
        axios(config)
            .then(function (response) {
                setUploadingStatus(false)
                console.log(JSON.stringify(response.data));
                registrationSuccess(true)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    postData()




    return (
        <div>
            <Dialog
                open={uplodingStatus}>
                <PleaseWait />
            </Dialog>
            <Dialog open={registrationSuccess}>
                Registration Success
            </Dialog>
        </div>
    )
}

export default Confirm
