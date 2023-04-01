import CrashTester from "react-native-crash-tester";

const person = {
    name: 'Foo',
    age: 20,
}
export default function triggerJsError() {
    CrashTester.jsCrash('Error triggered after tapping a button')
}

export function triggerNativeCrash() {
    CrashTester.nativeCrash('Native crash occurred after tapping button')
}


export function getPersonLocation() {
    const { name, age, location } = getPerson();
    updatePersonName();
    return location.toUpperCase();
}

const updatePersonName = () => {
    person['name'] = 'Bar';
}

const getPerson = () => {
    return person;
}