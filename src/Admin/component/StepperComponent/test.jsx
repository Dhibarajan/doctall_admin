import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Loading, NavHeader, Card, ID, Button, ModelPopup } from '../../components'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { connect } from 'react-redux'
import { logout } from '../../redux/actions/auth.actions'
import { useSelector, useDispatch } from "react-redux";
import { api, baseUrl } from '../../lib/constants'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import { getPatients } from '../../redux/actions/patient.actions'
import DocumentPicker from 'react-native-document-picker';
import Toast from 'react-native-simple-toast';
import RBSheet from "react-native-raw-bottom-sheet";

import ImagePicker from 'react-native-image-crop-picker';
var RNGRP = require('react-native-get-real-path');


const DragScreen = (props) => {

    const userdata = useSelector(state => state.user);
    const Patients = useSelector(state => state.patient);
    const dispatch = useDispatch();
    const [percent, setPercent] = useState(0)

    const [Selected, setSelected] = useState("Health");
    const [startupload, setStart] = useState(false)
    const [etime, setETime] = useState("0:00")
    const [progress, setProgress] = useState(0.0)
    const [modalVisible, setmodalVisible] = useState(false)
    const [profilepic, setprofilepic] = useState(false)

    const [Logoutshow, setLogoutshow] = useState(true)
    const [doctype, setDocType] = useState("")
    const refRBSheet = useRef();
    const [modalVisibleCancel, setmodalVisibleCancel] = useState(false)

    // const userdataprofile = useState(userdata.profile.profile_pic);
    //     console.log("userdataprofi",userdata);

    //  console.log("userdataprofilwwwwwe",userdata.profile.profile_pic);

    const ChangeNavigation = (Sname) => {
        if (Sname == "Passcode") {
            props.navigation.navigate('ChangePasscode');
        }
        else if (Sname == "Back") {
            //props.navigation.toggleDrawer()
            AsyncStorage.clear();
            props.logout()
        }
        else if (Sname == "HMO") {
            props.navigation.navigate('HMO');
        }
        else if (Sname == "Relative") {
            props.navigation.navigate('Relatives');
        }
        else if (Sname == "Health") {
            props.navigation.navigate('Health', { pagename: false });
        }
        setSelected(Sname)
    }
    const ApiFetch = () => {
        dispatch(getPatients())
    }
    useEffect(() => {
        if (Patients) {
            let data = Patients.data.filter((e) => e.relationship)[0];
            if (data) {
                axios.get(api.profileupdate + data.uuid, { headers: { 'x-auth-token': userdata.token } })
                    .then(res => {
                        if (res.data && res.data.percentage)
                            setPercent(res.data.percentage)
                    })
                    .catch(err => {
                        Toast.showWithGravity(err.response.data, Toast.LONG, Toast.TOP);
                    })
            }
        }
    }, [Patients])
    useEffect(() => {
        ApiFetch();
    }, []);


    const ChooseDoc = async () => {
        // try {
        //   if (name == undefined || name.trim() == "") {
        //     Toast.showWithGravity('Document Name is required', Toast.LONG, Toast.TOP);
        //     return false;
        //   }
        //   else if (patientval == undefined || patientval.value == undefined) {
        //     Toast.showWithGravity('Relative is required', Toast.LONG, Toast.TOP);
        //     return false;
        //   }
        //   else if (doctype == undefined || doctype == "") {
        //     Toast.showWithGravity('Document Type is required', Toast.LONG, Toast.TOP);
        //     return false;
        //   }
        const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.images, DocumentPicker.types.pdf, DocumentPicker.types.doc, DocumentPicker.types.docx],
            allowseEditing: true,
            aspect: [4, 3]

        });
        // const res =  ImagePicker.openPicker({

        //   width: 300,
        //   height: 400,
        //   cropping: true
        // }).then(image => {
        //   console.log("image",image);
        // });
        // console.log("huh",
        //   res.path,
        // );
        if (((res.size / 1000) / 1000) <= 5)
            Upload(res)
        else
            Toast.showWithGravity('Max allowed File size 5Mb', Toast.LONG, Toast.TOP);

        // } catch (err) {
        //   if (DocumentPicker.isCancel(err)) {
        //     // User cancelled the picker, exit any dialogs or menus and move on
        //   } else {
        //     throw err;
        //   }
        // }
    }
    // const Upload = async (image) => {
    //   const formData = new FormData()
    //   if (Platform.OS == "ios")
    //     image.name = image.uri.substring(image.uri.lastIndexOf('/') + 1);
    //   else {
    //     await RNGRP.getRealPathFromURI(image.uri).then(filePath => {
    //       console.log(filePath)
    //       image.uri = "file://" + filePath;
    //       image.fileCopyUri = "file://" + filePath;
    //     })
    //   }
    //   formData.append('media', image)
    //   let timeStarted = new Date();
    // var config = {
    //   method: 'post', url: api.displayimage, headers: { 'Content-Type': 'multipart/form-data','x-auth-token': userdata.token}, data: formData, onUploadProgress: function (progressEvent) {
    //     var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
    //     let timeElapsed = (new Date()) - timeStarted;
    //     let uploadSpeed = progressEvent.loaded / (timeElapsed / 1000);
    //     let etiming = ((progressEvent.total - progressEvent.loaded) / uploadSpeed);
    //     etiming = parseInt(etiming).toFixed(2);
    //     etiming = etiming.toString().replace(".", ":")
    //     setETime(etiming);
    //     setProgress(percentCompleted / 100)
    //     setStart(true)


    //   }
    // };
    // console.log("configgvh",config);

    // axios(config).then(function (response) {
    //   // console.log("2222",JSON.stringify(response));
    //   console.log("111211",response.data.url);

    //   var data = {
    //     // "docType": doctype,
    //     // "docName": name,
    //     // "location": response.data.url,
    //     // "patient": patientval.value,
    //     // "notes": note,
    //     "profile_pic": response.data.url
    //   }
    //   axios.post(api.profileimage +"/" +userdata.uuid ,data, { headers: { 'x-auth-token': userdata.token } })
    //     .then(res => {
    //       console.log("44432333",res);


    //       setmodalVisible(true)
    //     })
    //     .catch(err => {

    //       Toast.showWithGravity('Upload sucessfully',err.response.data, Toast.LONG, Toast.TOP);
    //       setmodalVisible(true);

    //     })

    // })
    //   .catch(function (error) {
    //     Toast.showWithGravity('Upload Failed', Toast.LONG, Toast.TOP);
    //     setmodalVisible(true)
    //     console.log(error);
    //   });



    const Upload = async (image) => {
        const formData = new FormData()
        if (Platform.OS == "ios")
            image.name = image.uri.substring(image.uri.lastIndexOf('/') + 1);
        else {
            await RNGRP.getRealPathFromURI(image.uri).then(filePath => {
                console.log(filePath)
                image.uri = "file://" + filePath;
                image.fileCopyUri = "file://" + filePath;
            })
        }
        formData.append('media', image)
        let timeStarted = new Date();
        var config = {
            method: 'post', url: api.displayimage, headers: { 'Content-Type': 'multipart/form-data', 'x-auth-token': userdata.token }, data: formData, onUploadProgress: function (progressEvent) {
                var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                let timeElapsed = (new Date()) - timeStarted;
                let uploadSpeed = progressEvent.loaded / (timeElapsed / 1000);
                let etiming = ((progressEvent.total - progressEvent.loaded) / uploadSpeed);
                etiming = parseInt(etiming).toFixed(2);
                etiming = etiming.toString().replace(".", ":")
                setETime(etiming);
                setProgress(percentCompleted / 100)
                setStart(true)


            }
        };
        console.log("configgvh", config);

        axios(config).then(function (response) {
            // console.log("2222",JSON.stringify(response));
            console.log("111211", response.data.url);

            var data = {
                // "docType": doctype,
                // "docName": name,
                // "location": response.data.url,
                // "patient": patientval.value,
                // "notes": note,
                "profile_pic": response.data.url
            }
            axios.post(api.profileimage + "/" + userdata.uuid, data, { headers: { 'x-auth-token': userdata.token } })
                .then(res => {
                    console.log("44432333", res);


                    setmodalVisible(true)
                })
                .catch(err => {

                    Toast.showWithGravity('Upload sucessfully', err.response.data, Toast.LONG, Toast.TOP);
                    setmodalVisible(true);

                })

        })
            .catch(function (error) {
                Toast.showWithGravity('Upload Failed', Toast.LONG, Toast.TOP);
                setmodalVisible(true)
                console.log(error);
            });





    }
    //   const CancelAppointment = () => {
    //     try {
    //         setmodalVisibleCancel(false)
    //         try{
    //           // axios.delete(api.deleteupload+"/"+docId, { headers: { 'x-auth-token': userdata.token } })

    //         axios.delete(api.deleteProfile +"/" +userdata.uuid, { headers: { 'x-auth-token': userdata.token } })
    //             .then((res) => {
    //                console.log("huhuhuh",res)

    //             })
    //             .catch((err) => {
    //                 // setmodalSuccessVisible(true)
    //             })
    //         }
    //         catch(e){
    //             console.log(e)
    //         }
    //         axios.put(api.deleteProfile + "/" + userdata.uuid + "/cancelled", {}, { headers: { 'x-auth-token': userdata.token } })
    //             .then(res2 => {
    //                 // setmodalSuccessVisible(true)
    //             }).catch(err => {
    //                 Toast.showWithGravity(err.response.data, Toast.LONG, Toast.TOP);

    //             })
    //     }
    //     catch (err) {
    //         Toast.showWithGravity('Photo cancel Failed', Toast.LONG, Toast.TOP);
    //         setmodalVisibleCancel(false)
    //     }
    // }

    const CancelAppointment = () => {

        axios.delete(api.deleteProfile + "/" + userdata.uuid, { headers: { 'x-auth-token': userdata.token } })
            .then(r => {
                console.log("qqqq", r)
                Toast.showWithGravity(r.data, Toast.LONG, Toast.TOP);
                setmodalVisibleCancel(false)
                window.location.reload()
                // Alertstatus("Close");
                // InitialLoad();
            })
            .catch(err => {
                setmodalVisibleCancel(false)
            })
    }


    return (

        <View style={styles.center}>
            {/* <ScrollView> */}
            <View style={styles.TopContainet}>
                <View style={styles.LogoContainer}>
                    <TouchableOpacity
                        onPress={() => { refRBSheet.current.open() }}>
                        {userdata.profile != 'undefined' ? (<View style={{ width: wp("25%"), height: wp("25%"), backgroundColor: "#fff", borderRadius: wp("12.5%"), justifyContent: "center", alignItems: "center", borderColor: "#37CC8C", borderWidth: 1 }}>
                            {/* <Image  source = {{uri : userdata.profile.profile_pic}} style={styles.LogoImage1}/> */}
                            <Image source={require("../../assets/icons/ProfileLogo.png")} style={styles.LogoImage} resizeMode="contain" />

                        </View>)
                            : null
                        }
                        {userdata.profile == 'undefined' ? (<View style={{ width: wp("25%"), height: wp("25%"), backgroundColor: "#fff", borderRadius: wp("12.5%"), justifyContent: "center", alignItems: "center", borderColor: "#37CC8C", borderWidth: 1 }}>
                            <Image source={require("../../assets/icons/ProfileLogo.png")} style={styles.LogoImage} resizeMode="contain" />

                        </View>) : null}
                    </TouchableOpacity>
                </View>
                <View style={styles.ProfileContainer}>
                    <View style={styles.NameBox}>
                        <Text style={styles.Name}>{userdata.firstName + " " + (userdata.middleName ? (userdata.middleName + " ") : "") + userdata.lastName}</Text>
                    </View>
                    <View style={styles.EmailBox}>
                        <Text style={styles.OtherDetails}>{userdata.email}</Text>
                    </View>
                    <View style={styles.NumberBox}>
                        <Text style={styles.OtherDetails}>{userdata.mobile}</Text>
                    </View>
                    <View style={styles.StatusBox}>
                        <Text style={styles.profilepercent}>Profile Completed: {percent}%</Text>
                    </View>
                    <View style={styles.StatusBar}>
                        <View style={[styles.CompleteStatus, { width: percent + "%" }]}></View>
                    </View>

                </View>
            </View>

            <View style={styles.SelectionContainer}>
                <View style={Selected == "Health" ? styles.Selected1 : styles.Unselested1}>
                    <TouchableOpacity style={styles.TouchStyle} onPress={() => ChangeNavigation("Health")}>
                        <Text style={styles.ListText}>Health Profile</Text>
                        <Image source={require("../../assets/icons/Profile_Arrow.png")} resizeMode="cover" />
                    </TouchableOpacity>

                </View>
                <View style={Selected == "Relative" ? styles.Selected2 : styles.Unselested2}>
                    <TouchableOpacity style={styles.TouchStyle} onPress={() => ChangeNavigation("Relative")}>
                        <Text style={styles.ListText}>Relatives</Text>
                        <Image source={require("../../assets/icons/Profile_Arrow.png")} resizeMode="cover" />
                    </TouchableOpacity>
                </View>
                <View style={Selected == "HMO" ? styles.Selected2 : styles.Unselested2}>
                    <TouchableOpacity style={styles.TouchStyle} onPress={() => ChangeNavigation("HMO")}>
                        <Text style={styles.ListText}>HMO/Insurance</Text>
                        <Image source={require("../../assets/icons/Profile_Arrow.png")} resizeMode="cover" />
                    </TouchableOpacity>
                </View>
                <View style={Selected == "Passcode" ? styles.Selected2 : styles.Unselested2}>
                    <TouchableOpacity style={styles.TouchStyle} onPress={() => ChangeNavigation("Passcode")}>
                        <Text style={styles.ListText}>Change Passcode</Text>
                        <Image source={require("../../assets/icons/Profile_Arrow.png")} resizeMode="cover" />
                    </TouchableOpacity>
                </View>
            </View>
            {baseUrl.indexOf('54.75.59.124') > -1 ? <Text style={{ marginBottom: 10, color: "red" }}>{`Testing`} </Text> : null}



            <View style={styles.BackContainer}>
                <View style={{ marginLeft: wp("5%") }}>
                    <Text style={{ fontFamily: "GreycliffCF-Bold", fontSize: RFValue(13), color: "#00839B", marginBottom: 5 }}>Contact Support</Text>
                    <Text style={{ fontFamily: "GreycliffCF-Bold", fontSize: RFValue(11), color: "#00839B" }}>{"Email: support@doctall.com\nPhone Number: 09010996000"}</Text>
                </View>
                <TouchableOpacity style={styles.BackLayer} onPress={() => ChangeNavigation("Back")}>
                    <View style={styles.BackButton} >
                        {/* <Image source={require("../../assets/icons/Back.png")} style={styles.BackImage} resizeMode="cover" /> */}
                        <Text style={styles.BBText}>Logout</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                customStyles={{
                    wrapper: {
                        backgroundColor: "transparent",
                    },
                    draggableIcon: {
                        backgroundColor: "#C4F0DD"
                    },
                    container: {
                        borderRadius: 20,
                        width: '85%',

                    }
                }}
            >
                {/* <View style={styles.Unselested3}> */}
                <View style={{ marginBottom: hp("5%"), marginLeft: 20, marginRight: 20, borderBottomWidth: 1, borderBottomColor: '#00adcc', borderRadius: 10 }}>
                    <Text style={{ marginTop: 20, marginLeft: 5, marginBottom: 20, fontSize: RFValue(19.5), fontFamily: "GreycliffCF-Bold", color: "#00839B", }}>
                        Change profile photo</Text>
                </View>
                <View >
                    <TouchableOpacity onPress={() => ChooseDoc()}>
                        <Text style={styles.ListText1}>New Profile Photo</Text>
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity onPress={() => ChooseDoc()}>
                        <Text style={styles.ListText1}>Import From Gallery</Text>
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity onPress={() => { setmodalVisibleCancel(true) }}>
                        <Text style={styles.removetext}>Remove Profile photo</Text>
                    </TouchableOpacity>
                </View>


            </RBSheet>
            <ModelPopup blackClose modalVisible={modalVisibleCancel} blackClose close={() => { setmodalVisibleCancel(false) }}>
                <Text style={styles.modaltext}>Are you sure you want to remove your profil photo?</Text>

                {/* <Text style={styles.modaltext}>Appointments cancelled less than 24 hours before the appointment time will not be eligible for a refund.</Text>
<Text style={styles.modaltext}>Please refer to our refund policy for more details</Text> */}

                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20, width: "100%" }}>
                    <Button title={"Yes"} style={{ backgroundColor: "#08B4D4", marginBottom: 20, width: wp("25%"), height: 60, borderRadius: 10 }} onPress={() => CancelAppointment()} />
                    <Button title={"No"} style={{ backgroundColor: "#078CA5", marginBottom: 20, width: wp("25%"), height: 60, borderRadius: 10 }} onPress={() => { setmodalVisibleCancel(false) }} />
                </View>
            </ModelPopup>

            {/* </ScrollView> */}
        </View>


    );
};

const styles = StyleSheet.create({
    center: {
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "transparent",
        position: 'absolute',
        width: "100%",
        height: hp("100%"),
        top: 0
    },
    modaltext: {
        color: "#013C44",
        fontFamily: "GreycliffCF-Bold",
        fontSize: RFPercentage("2.2"),
        textAlign: "center",
        marginTop: 10
    },

    TopContainet: {
        height: hp("30%"),
        width: "100%",
        backgroundColor: "#00839B",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        flexDirection: "row",
        paddingBottom: hp("5%"),
        borderTopRightRadius: 20,
    },
    LogoContainer: {
        marginRight: 20,
        height: hp("30%"),
        width: "30%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    SelectionContainer: {
        height: hp("53%"),
        backgroundColor: "#ffffff",
    },
    BackContainer: {
        height: hp("17%"),
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        paddingRight: 20,
        backgroundColor: "#fff",
        borderBottomRightRadius: 20,
        paddingBottom: 50
    },
    LogoImage: {
        width: wp("18%"),
        height: wp("18%"),
    },
    LogoImage1: {
        // width:wp("18%"),
        // height:wp("18%"),
        width: wp("25%"), height: wp("25%"),
        borderRadius: wp("12.5%"), justifyContent: "center", alignItems: "center", borderColor: "#37CC8C", borderWidth: 1
    },

    ProfileContainer: {
        width: "55%",
    },
    Name: {
        color: "#fff",
        fontFamily: "GreycliffCF-Bold",
        fontSize: RFValue(18),
        marginBottom: 5
    },
    OtherDetails: {
        color: "#C4F0DD",
        fontFamily: "GreycliffCF-Bold",
        fontSize: RFValue(12),
        marginBottom: 3
    },
    profilepercent: {
        color: "#fff",
        fontFamily: "GreycliffCF-Bold",
        fontSize: RFValue(11),
        marginBottom: 3
    },
    StatusBox: {
        marginTop: 10
    },
    StatusBar: {
        width: "80%",
        height: 1,
        backgroundColor: "#fff",
        marginTop: 7
    },
    CompleteStatus: {
        width: "40%",
        height: "100%",
        backgroundColor: "#37CC8C"
    },
    Selected1: {
        width: "100%",
        borderColor: "#66B3C1",
        borderWidth: 1,
        backgroundColor: "#C4F0DD",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    Unselested1: {
        width: "100%",
        borderColor: "#00adcc",
        borderWidth: 1,
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    Unselested3: {
        width: "100%",
        borderColor: "#00adcc",
        borderWidth: 1,
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    TouchStyle: {
        padding: hp("4%"),
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    Selected2: {
        width: "100%",
        borderColor: "#66B3C1",
        backgroundColor: "#C4F0DD",
        borderBottomWidth: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    Unselested2: {
        width: "100%",
        borderColor: "#00adcc",
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    ListText: {
        fontFamily: "GreycliffCF-Bold",
        fontSize: RFValue(15),
        color: "#00839B",

    },
    ListText1: {
        fontFamily: "GreycliffCF-Bold",
        fontSize: RFValue(15),
        color: "#00839B",
        marginLeft: 30,
        marginBottom: 20

    },

    removetext: {
        fontFamily: "GreycliffCF-Bold",
        fontSize: RFValue(15),
        color: "#f23d18",
        marginLeft: 30,
        marginBottom: 20

    },


    BackLayer: {

        backgroundColor: "#00839B",
        paddingRight: 20,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingTop: 10,
        borderRadius: 10
    },
    BackImage: {
        marginRight: 10
    },
    BackButton: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    BBText: {
        fontFamily: "GreycliffCF-Bold",
        fontSize: RFValue(13),
        color: "#fff",
    }
});

const mstp = state => ({ user: state.user })
export default connect(mstp, { logout })(DragScreen)


