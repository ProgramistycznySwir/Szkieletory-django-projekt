# Szkieletory-django-projekt

## Jak będzie wygląda baza danych:
- Każdy użytkownik w swoich danych będzie przechowywał id root folderu
- Wszystkie pliki i foldery będą jedynie zawierać id folderu rodzica, w bazie będzie flaga która ustala czy wpis jest plikiem czy folderem
- { ID: GUID, ParentID: GUID, Name: string, IsFile: bool }
