# Szkieletory-django-projekt

## Jak będzie wygląda baza danych:
- Każdy użytkownik w swoich danych będzie przechowywał id root folderu
- Wszystkie pliki i foldery będą jedynie zawierać id folderu rodzica, w bazie będzie flaga która ustala czy wpis jest plikiem czy folderem
- File: { ID: GUID, ParentID: GUID, Name: string, Size: u64, Type: string, IsFile: bool }
- User: { ID: GUID, RootDirectoryID: GUID, EMail: string }
- Group: { ID: GUID, RootDirectoryID: GUID, Name: string }
- Relacja: Group >< User

## Za tydzień:
- Implementacja modeli,
- Panel admina do dodawania katalogów.
