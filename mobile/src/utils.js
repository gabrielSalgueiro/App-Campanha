import {Alert, Clipboard, Linking} from 'react-native'
import { showMessage} from "react-native-flash-message";

export function validateWhatsApp(wpp){
    var re = /(\+\d{2})?\s?(\(?\d{2}\)?\s?)(\d{4,5}\-?\d{4})/;
    if (re.test(wpp)){
        return true;
        
    } else {
        console.log('wpp deu ruim')
        Alert.alert(
            'Erro de Submissão',
            'Whatsapp no formato Incorreto !'

        )
        //alert("E-mail no formato Incorreto !");
        return false;
    }
}

export function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(email).toLowerCase())) {
        return true;
    } else {
        Alert.alert(
            'Erro de Submissão',
            'E-mail no formato Incorreto !'

        )
        //alert("E-mail no formato Incorreto !");
        return false;
    }
}

export function clearWpp(wpp){

    var temp = String(wpp)

    temp = temp.replace(' ', '')
    temp = temp.replace('(', '')
    temp = temp.replace(')', '')

    return temp
}

export function copyToClipboard(text){
    Clipboard.setString(text)
    showMessage({
        message: "Copiado para a Área de Transferência",
        type: "info",
        backgroundColor: "#3DACE1",
        style:{alignItems: 'center'}
      });
}


export function sendWhatsapp(wpp){
    Linking.openURL(`whatsapp://send?phone=+55${wpp}`)
}

export function filterMembers(allMembers, name, team, checkCar){

    const newData = allMembers.filter(member =>{
        const memberData = `${member.name.toUpperCase()} ${member.realName.toUpperCase()}`
        const textData =  name.toUpperCase();
        if(checkCar == false){
            if(team == 'all')
                return (memberData.indexOf(textData) > -1)
            else
                return (memberData.indexOf(textData) > -1) &&
                    (member.team.name.toUpperCase() == team.toUpperCase())
        }else{

            if(team == 'all')
                return (memberData.indexOf(textData) > -1) &&
                    (member.hasCar == 1);
            else
                return  (memberData.indexOf(textData) > -1) &&
                        (member.team.name.toUpperCase() == team.toUpperCase()) &&
                        (member.hasCar == 1);
        }
    });
    return newData;
}