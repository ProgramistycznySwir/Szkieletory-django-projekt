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


# E-Disk
- Magazyn plików
  - Użytkownicy
  - Ograniczony rozmiar e-dysku
  - Struktury:
    - Katalog
    - Plik
  - Operacje:
    - Wspólne:
      - Pobierz
      - Udostępnij
      - Zmiana nazwy
      - Wytnij
      - Wklej
      - Usuń
    - Katalog:
      - Nowy katalog
      - Załaduj

# Scripts:
```s
  coverage run --omit='*/venv/*' manage.py test
  coverage html
```

# Dla mikele:

- [ ] Zrobić całe ui front-end'u:
  - [ ] Strona folderu:
    - [ ] Dodawanie folderów
    - [ ] Uploadowanie plików
    - [ ] Refka na stronę użyszkodnika
    + [ ] Jeśli jest to folder to można go upublicznić (albo schować)
      - [ ] Prompt
    - [ ] Wyświetlanie tabelki zawartości:
      - [ ] Wypisanie info
      - [ ] Edytowanie nazwy
      - [ ] Usuwanie elementów
        - [ ] Prompt
      + [ ] Jeśli jest to folder to można go upublicznić (albo schować)
        - [ ] Prompt
  > - [ ] Strona użyszkodnika:
  >   - [ ] Info
  >   - [ ] Edycja username
  >   - [ ] Refka na stronę root-folder'u
  >   * [ ] Usuwanie konta
  >   > - [ ] Lista (najlepiej drop-down) zaproszeń do grupy:
  >   >   - [ ] Możliwość akceptowania albo odrzucania zaproszeń
    > - [ ] Lista grup:
    >   - [ ] Tworzenie nowej grupy
    >   - [ ] Lista grup do których należysz
  > - [ ] Strona grupy:
  >   - [ ] Wyświetlanie nazwy grupy
  >   - [ ] Refka na root-folder grupy
  >   - [ ] Lista członków
  >   - [ ] Dodawanie nowych członków po uuid
  >   - [ ] Lista (najlepiej drop-down) zaproszeń do grupy:
  >     - [ ] Możliwość akceptowania albo odrzucania zaproszeń
  >   - [ ] Opuszczanie grupy
  >   * [ ] Jeśli wszyscy użyszkodnicy opuszczą grupę to usunąć ją