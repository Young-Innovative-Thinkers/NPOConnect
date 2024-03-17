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
11. Binnen het project is master de default branch. Ga hier dus GEEN code naartoe pushen die nog niet is gecontroleerd door een teamgenoot. Maak hiervoor een nieuwe branch aan met de kopie van de master branch
    ![image](https://github.com/Young-Innovative-Thinkers/NPOConnect/assets/75488878/30c6b2e6-e30e-4b54-8b5f-160963c498e3)
    ![image](https://github.com/Young-Innovative-Thinkers/NPOConnect/assets/75488878/c73aa52b-c551-41ec-bef4-ccac6e3826f0)
    ![image](https://github.com/Young-Innovative-Thinkers/NPOConnect/assets/75488878/6e131902-d841-4137-aec1-d2450a84bfa1)
    ![image](https://github.com/Young-Innovative-Thinkers/NPOConnect/assets/75488878/e19b6e59-31ea-4330-ab11-3938a9f6fd6f)
12. Om alle branches netjes en overzichtelijk te houden schrijven we branches als volgt: add-favorites-page
13. Commits kunnen het beste geschreven worden als volgt: Add feed stories.
14. Om het voor jezelf makkelijk te maken is het aan te raden om veel kleine commits te maken. Als je later iets kapot hebt gemaakt wat eerst wel werkte, dan kan je deze code makkelijk terugvinden in je commits.



Code style:
1. Eslint is toegevoegd aan het project om ervoor te zorgen dat de code style gelijk is. Als je dubbele quotes gebruikt moet er een error komen. Dit wordt automatisch opgelost als je de code opslaat.
2. Als de eslint niet goed wordt toegepast kan dit komen doordat je de Prettier extension hebt draaien in VSCode. Deze moet je dan uitzetten.
3. Mocht dit niet het geval zijn, download dan de eslint extension in VSCode.
4. Om minder problemen te hebben tijdens Pull/Merge Request, is het handig om je imports ascending te sorteren. Dit doe je door je imports te selecteren en vervolgens CTRL+Shift+P te klikken en vervolgens op sort lines ascending te klikken.
![image](https://github.com/Young-Innovative-Thinkers/NPOConnect/assets/75488878/08098778-b20a-4f0f-91f4-2140dc5caad5)
