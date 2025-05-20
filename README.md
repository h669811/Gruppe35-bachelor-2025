# Mobilmodul for CanEat

Dette prosjektet er en mobilmodul utviklet med Expo og React Native. Brukeren kan skanne produkter, ta og redigere bilder, og laste dem opp til skylagring. Bildene vises deretter i CanEats administrasjonsverktøy, der tekstuttrekk fra OCR kan vurderes og lagres sammen med produktdata.

## Kom i gang

Følg stegene under for å installere og kjøre prosjektet lokalt.

### 1. Installer Node.js

Last ned og installer Node.js fra:  
https://nodejs.org/en/download

### 2. Installer Expo CLI

Åpne terminalen og kjør følgende kommando for å installere Expo CLI globalt:

```bash
npm install --global expo-cli
```

### 3. Installer Expo Go-appen på mobilen

- **Android**: Last ned **Expo Go** fra Google Play  
- **iOS**: Last ned **Expo Go** fra App Store

### 4. Installer prosjektavhengigheter

Naviger til prosjektmappen i terminalen og kjør:

```bash
npm install
```


### 5. Åpne prosjektet i Visual Studio Code

1. Start Visual Studio Code (eller annen IDE).  
2. Velg `File > Open Folder` og åpne prosjektmappen.

### 6. Åpne terminalen

Hvis terminalen ikke vises automatisk, åpne den via:
```bash
Terminal > New Terminal
```


### 7. Start prosjektet

Kjør følgende kommando i terminalen:
```bash
npx expo start
```


Dette starter prosjektet og viser en QR-kode i terminalen og i nettleseren.

### 8. Koble til Expo Go-appen

- **iOS**:  
  Åpne kamera-appen og skann QR-koden. Appen åpnes automatisk i Expo Go.  
- **Android**:  
  Åpne Expo Go-appen, trykk på “Scan QR Code” og skann QR-koden.

### 9. Kjør prosjektet på enheten

- Nettleseren åpnes med en URL til prosjektet.  
- Trykk på “Expo Go” for å starte appen.  
- Appen bygges på enheten, og etter vellykket lasting er den klar til bruk.

## Firebase-konfigurasjon

Firebase må være konfigurert lokalt for at appen skal fungere.

- Det brukes egne Firebase-nøkler og en egen database for testing.  
- Denne informasjonen er lagret i `firebaseConfig.js`, som er lagt til `.gitignore` og deles ikke offentlig.  
- Sørg for at `firebaseConfig.js` eksisterer lokalt og inneholder gyldig konfigurasjon.

## Hovedfunksjoner

- Skanning av strekkoder  
- Bildeopptak, beskjæring og rotasjon  
- Opplasting til Firebase Storage  
- Visning og behandling i CanEats administrasjonsverktøy

