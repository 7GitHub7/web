
Algorym klasyfikacji danych bazujący na prawdopodobieństwie. Zakładając, że mamy dwie grupy danych:
z czego jedna zawiera 20 elementów, natomiast druga zawira 10 to w przypadku konieczności klasyfikacji nowego nieznanego elementu, prawdopodobieństwo, że będzie on należał do grupy 1 wynosi 20/30, 2 - 10/20.
Takie założenia nazywane są "a priori". Ze względu na to, że a priori daję nam pogląd tylko na cały zbiór to musimy uwzględnić bardziej precyzyjne czynniki które opisują otocznie nowo dodanego elemntu. Moze być to sąsiedztwo w jakim się znajduje element lub cechy charakterystyczne dla danej grupy(np klasyfikacja komentarzy na portalu - a priori to obraźliwe lub nie, natomiast możemy to wzbogacić przez charakterystyczne słowa dla danej grupy) 

Działanie algorytmu:
1. liczymy a priori dla obu grup
2. liczymy prawdopodobieństwa dla cech charakterystycznych w grupach
3. mnożymy a priori przez wyniki dla cech
4. porównujemy wyniki - im większza liczba tym prawdopodbieństwo jest większe

