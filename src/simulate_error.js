import CrashTester from "react-native-crash-tester";

export default function triggerNativeCrash() {
    CrashTester.nativeCrash('Native crash triggered on App start')
}