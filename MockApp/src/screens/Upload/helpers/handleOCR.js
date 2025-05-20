import * as FileSystem from 'expo-file-system'
import base64 from 'base-64'

const GOOGLE_CLOUD_API_KEY = '' // Bruk Google Vision API Key her

export const handleOCR = async (imageUri, label = 'OCR') => {
  try {

    const base64Image = await FileSystem.readAsStringAsync(imageUri, {
      encoding: FileSystem.EncodingType.Base64,
    })

    const requestBody = {
      requests: [
        {
          image: {
            content: base64Image,
          },
          features: [
            {
              type: 'TEXT_DETECTION',
            },
          ],
        },
      ],
    }

    const response = await fetch(
      `https://vision.googleapis.com/v1/images:annotate?key=${GOOGLE_CLOUD_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      }
    )

    const result = await response.json()

    const parsedText = result?.responses?.[0]?.fullTextAnnotation?.text || ''

    return parsedText
  } catch (err) {
    Alert.alert('Upload Failed', err.message || 'Ukjent feil');
    return ''
  }
}


