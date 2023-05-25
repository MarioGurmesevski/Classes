CREATE TABLE artists (
	artist_id serial primary key,
	artist_name varchar (50)
);

CREATE TABLE albums (
	album_id serial primary key,
	album_name varchar (50),
	rating decimal (3,2),
	artist_id int,
	foreign key (artist_id) references artists (artist_id)
);

CREATE TABLE songs (
	song_id serial primary key,
	song_name varchar (50),
	duration interval, -- '02:56'
	album_id int,
	foreign key (album_id) references albums (album_id)
);

CREATE TABLE genres (
	genre_id serial primary key,
	genre_name varchar (50)
);

CREATE TABLE songs_genres (
	song_id int,
	genre_id int,
	primary key (song_id, genre_id),
	foreign key (song_id) references songs (song_id),
	foreign key (genre_id) references genres (genre_id)
);

-- INSERTING DATA

INSERT INTO artists (artist_name)
VALUES ('Ed Sheeran'),
		('50 Cent'),
		('Naum Petreski'),
		('Nirvana'),
		('Jordan Mitev');
		
INSERT INTO albums (album_name, artist_id, rating)
VALUES ('X', 1, 4.8),
	   ('Get rich or die trying', 2, 5.0),
	   ('1989', 1, 4.5),
	   ('Best Hits', 3, 3.4),
	   ('Bleach', 4, 4.7);
		
INSERT INTO songs (song_name, album_id, duration)
VALUES ('Shape of you', 1, '03:45'),
	   ('Castle of the hill', 1, '04:21'),
	   ('In the club', 2, '03:32'),
	   ('Odi dzvezdo', 4, '05:34'),
	   ('Ne kani me', 4, '06:45'),
	   ('Papercuts', 5, '04:56'),
	   ('If I cant', 2, '03:32');
		
INSERT INTO genres (genre_name)
VALUES ('Pop'),
	   ('Rock'),
	   ('Folk'),
	   ('Rap'),
	   ('Indie');

INSERT INTO songs_genres (song_id, genre_id)
VALUES (5, 3),
	   (1, 1),
	   (2, 1),
	   (3, 4),
	   (4, 3),
	   (6, 2),
	   (7, 4),
	   (2, 2),
	   (4, 2);
		
-- SELECTS

SELECT * FROM artists
SELECT * FROM albums
SELECT * FROM songs
SELECT * FROM genres
SELECT * FROM songs_genres

-- One To Many Relations (Aritst to Albums)

-- Example 1: Retrieve the artist for a specific album.

SELECT ar.artist_name, al.album_name
FROM artists ar
INNER JOIN albums al ON ar.artist_id = al.artist_id
WHERE al.album_name = 'Best Hits';

-- Example 2: Retrieve the number of albums for each artist.

SELECT ar.artist_name, COUNT (al.album_name) AS album_count
FROM artists ar
LEFT JOIN albums al ON ar.artist_id = al.artist_id
GROUP BY ar.artist_name

-- Example 3: Retrieve the album for a specific song.

SELECT a.album_name, s.song_name
FROM albums a
LEFT JOIN songs s ON a.album_id = s.album_id
WHERE s.song_name = 'Odi dzvezdo'

-- Example 4: Retrieve albums that do not have any songs.

SELECT a.album_name, s.song_name
FROM albums a
LEFT JOIN songs s ON a.album_id = s.album_id
WHERE s.song_name IS NULL

-- Many to Many (Songs and Genre)

-- Example 1: Retrieve all songs belonging to a specific genre.

SELECT s.song_name, g.genre_name
FROM songs s
INNER JOIN songs_genres sg ON s.song_id = sg.song_id
INNER JOIN genres g ON sg.genre_id = g.genre_id
WHERE g.genre_name = 'Rock'

-- Example 2: Retrieve all genres for a specific song.

SELECT g.genre_name
FROM genres g
INNER JOIN songs_genres sg ON g.genre_id = sg.genre_id
INNER JOIN songs s ON sg.song_id = s.song_id
WHERE s.song_name = 'Odi zvezdo'

-- Example 3: Retrieve songs that belong to multiple genres.

SELECT s.song_name, COUNT (sg.genre_id) AS genre_count
FROM songs s
INNER JOIN songs_genres sg ON s.song_id = sg.song_id
GROUP BY s.song_name
HAVING COUNT (sg.genre_id) > 1

-- Example 4: Retrieve the songs and their corresponding album names.

SELECT s.song_name, a.album_name
FROM  songs s
INNER JOIN albums a ON s.album_id = a.album_id

-- Example 5: Retrieve the songs, their album names, and he artist names.

SELECT s.song_name, al.album_name, ar.artist_name
FROM  songs s
INNER JOIN albums al ON s.album_id = al.album_id
INNER JOIN artists ar ON ar.artist_id = al.artist_id

-- Example 6: Retrieve all the albums and their corrosponding songs (including albums with no songs).

SELECT al.album_name, s.song_name
FROM albums al
LEFT JOIN songs s ON al.album_id = s.album_id

-- Example 7: Retrieve all artists and their corresponding albums (including artists with no albums)

SELECT ar.artist_name, al.album_name
FROM artists ar
LEFT JOIN albums al ON ar.album_id = al.album_id

-- Example 8: Retrieve all songs and their corresponding album names (including songs with no albums)



-- Example 9: Retrieve all the number of songs for each album, only including albums with more then 2 songs

SELECT al.album_name, COUNT(s.song_id) AS song_count
FROM albums al
INNER JOIN songs s ON al.album_id = s.album_id
GROUP BY al.album_name
HAVING COUNT (s.song_id)>2

-- Example 10: Retrieve the number of songs for each genre, only including genres with more than 1 song

SELECT g.genre_name, COUNT (sg.song_id) AS song_count
FROM  genres g
LEFT JOIN songs_genres sg ON g.genre_id = sg.genre_id
GROUP BY g.genre_name
HAVING COUNT(sg.song_id)>1

-- Example 10: Retrieve the genre with the maximum number of songs

SELECT g.genre_name, COUNT(sg.song_id) song_count
FROM genres g
INNER JOIN songs_genres sg ON g.genre_id = sg.genre_id
GROUP BY g.genre_name
HAVING COUNT (sg.song_id) = (
	SELECT MAX(song_count)
	FROM 
	(
		SELECT (
				COUNT(song_id) AS song_count 
				FROM songs
				GROUP BY album_id
			   )
		AS subquery
	) 
)

-- Class 4

















