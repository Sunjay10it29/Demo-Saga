
import { useAlert } from 'react-alert'
export function showAlert(title, message) {
   
    return new Promise((resolve, reject) => {
        const alert = useAlert();
        alert.show(
        title,
        message,
        [
          { text: 'OK', onPress: resolve },
        ],
        { cancelable: false }
      )
    })
  }