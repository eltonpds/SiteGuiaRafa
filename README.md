# Rafaela Silva's apresentation WebSite

I created this site as a gift for a friend to showcase her various professional fields, 
hobbies, and passions.

Rafaela Silva is a talented artisan, an amateur runner, and a geography teacher; 
she also works as a tour guide. The photos featured on the website 
are of places she has visited in Brazil for work or leisure.

Here, I describe the site's features, structure, organization, and the concepts behind each function.

## CSS Folder:
- Bootstrap (original and minified)
- Styles
- Map

### Bootstrap CSS:
I used the original (unminified) Bootstrap CSS to modify root properties 
such as colors, sizes, carousel icons, etc.

### Styles CSS:
This file defines the styles for each site element 
(Section, Aside, Images, Header, Footer, etc.), the "back to top" button, 
and the effect for the "Artisan" section.

### Map CSS:
This file contains styles specifically for the site's main feature, the 
Brazil map section—which handles:
- Specifying the size of the location pin and its behavior upon clicking
- Pin placement on the map across different screen sizes
- The icon effect indicating that a location on the map needs to be selected

After completing each CSS file, I used the "Minify For VS Code" extension to 
generate the minified version.

## JS Folders:
- Animations
- BrasilMap
- Bootstrap, Jquery and Popper

### Animations JS:
Neste arquivo contém os códigos responsável para as seguintes funções:
- Manipular o tempo da rolagem de tela (ScrollSpy)
- Verificar se o dispositivo é mobile ou Desktop e definir o formato e forma de carregamento do mosaico na seção Artesanato
- Código do botão para Rolar para o Topo do site
- Código para remover links ativos e mostrar itens do mosaico

### Brasil Map JS: 
This code is used to populate the map of Brazil with pins representing each visited state, 
along with their associated content.
Information for each state including the abbreviation, name, photos url, videos url (if applicable), 
and captions/descriptions for each photo is structured in JSON format. Example:

```
[{
    "id": 0,
    "name": "Los Angeles",
    "acronym": "LA",
    "url": [{
        "urlFoto": "../videos/LA.mp4",
        "fotoTitle": "Los Angeles",
        "fotoDescription": "Downtown",
        "hasVideo": true,
        "width": 50
    }]
},
``` 

Next, a "For Each" function generates the HTML structure based on the 
device type (mobile or desktop) and using the JS function called InsertAdjecentHTML
to insert the new structure to its respective location in the original HTML code.
On desktop devices, the carousel is displayed next to the map.
On mobile devices, the carousel appears in a modal overlaying the map.

Logic is included to check if the item to be displayed is a video; if so, 
the video plays automatically, but pauses as soon as the carousel advances.

Future implementations for Version 2.0:
- Improve the code for placing location pins (avoiding CSS-based methods);
- Implement photo titles for carousels on mobile devices.
