import {Alert} from 'react-native';

interface AlertArgs {
  title: string;
  message?: string;
  OnOkPressed?: () => void;
  isCancellable?: boolean;
}

const showAlert = (args: AlertArgs) => {
  Alert.alert(
    args.title,
    args.message,
    [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          args.OnOkPressed;
        },
      },
    ],
    {cancelable: args.isCancellable ?? true},
  );
};

export default showAlert;
