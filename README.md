Project openen:
1. Open de GitHub repo en klik op Code om vervolgens de HTTPS url te kopiëren. 
   ![image](https://github.com/Young-Innovative-Thinkers/NPOConnect/assets/75488878/6598ad30-ddd0-4936-92ec-5fe7211d71a5)
2. Open een 'new window' in Visual Studio Code (Rechter muisklik op VSCode icon). 
3. Plak de url van de GitHub repo
   ![image](https://github.com/Young-Innovative-Thinkers/NPOConnect/assets/75488878/58a021fe-0300-4fe9-bd51-e8ad01a09d77)
4. Run npm install / npm i in de terminal
5. Run npm run start / npm start in de terminal
6. Download de Expo Go app op je telefoon
7. Voor IOS gebruikers => open je camera en scan de QR code die in je terminal staat om het project te zien op je telefoon
8. Voor Android gebruikers => open de Expo Go app en scan via daar de QR code
9. Ik heb een opzet gemaakt, zodat iedereen gelijk aan de slag kan. Verwijder deze bestanden aub niet. Anders gaat de navigation stuk. Wijzig ook de naam van deze functies niet.
10. Krijg je op je telefoon een melding te zien dat het openen van het project langer duurt dan normaal? Dan zou je dit kunnen oplossen door --tunnel te verwijderen in de package.json bij de start script.

Code style:
1. Eslint is toegevoegd aan het project om ervoor te zorgen dat de code style gelijk is. Als je dubbele quotes gebruikt moet er een error komen. Dit wordt automatisch opgelost als je de code opslaat.
2. Als de eslint niet goed wordt toegepast kan dit komen doordat je de Prettier extension hebt draaien in VSCode. Deze moet je dan uitzetten.
3. Mocht dit niet het geval zijn, download dan de eslint extension in VSCode.
4. Om minder problemen te hebben tijdens Pull/Merge Request, is het handig om je imports ascending te sorteren. Dit doe je door je imports te selecteren en vervolgens CTRL+Shift+P te klikken en vervolgens op sort lines ascending te klikken.
![image](https://github.com/Young-Innovative-Thinkers/NPOConnect/assets/75488878/08098778-b20a-4f0f-91f4-2140dc5caad5)
