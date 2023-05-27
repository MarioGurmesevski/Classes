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

-- Many-to-Many Relationship (Songs to Genres):

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

SELECT s.song_name, COUNT(sg.genre_id) as genre_count
FROM songs s
INNER JOIN songs_genres sg ON s.song_id = sg.song_id
GROUP BY s.song_name
HAVING COUNT(sg.genre_id) > 1

-- Example 4: Retrieve the songs and their corresponding album names.

SELECT s.song_name, a.album_name
FROM songs s
INNER JOIN albums a ON s.album_id = a.album_id

-- Example 5: Retrieve the songs, their album names, and the artist names.

SELECT s.song_name, al.album_name, ar.artist_name
FROM songs s
INNER JOIN albums al ON s.album_id = al.album_id
INNER JOIN artists ar ON ar.artist_id = al.artist_id

-- Example 6: Retrieve all albums and their corresponding songs (including albums with no songs).

SELECT al.album_name, s.song_name
FROM albums al
LEFT JOIN songs s ON al.album_id = s.album_id

-- Example 7: Retrieve all artists and their corresponding albums (including artists with no albums).



-- Example 8: Retrieve all songs and their corresponding album names (including songs without albums).



-- Example 9: Retrieve all albums and their corresponding artist names (including albums without artists).



-- Example 10: Retrieve all songs and their corresponding album names, including songs without albums and albums without songs.



-- Example 11: Retrieve all albums and their corresponding artist names, including albums without artists and artists without albums.



-- Example 12:Retrieve the number of songs for each album, only including albums with more than 2 songs.

SELECT al.album_name, COUNT(s.song_id) as song_count
FROM albums al
INNER JOIN songs s ON al.album_id = s.album_id
GROUP BY al.album_name
HAVING COUNT(s.song_id) > 2

-- Example 13: Retrieve the number of songs for each genre, only including genres with more than 1 song.

SELECT g.genre_name, COUNT(sg.song_id) AS song_count
FROM genres g
LEFT JOIN songs_genres sg ON g.genre_id = sg.genre_id
GROUP BY g.genre_name
HAVING COUNT(sg.song_id) > 1

-- Example 14: Retrieve the album with the maximum number of songs.



-- Example 15: Retrieve the genre with the maximum number of songs.

SELECT genres.genre_name, COUNT(songs_genres.song_id) AS song_count
FROM genres
INNER JOIN songs_genres ON genres.genre_id = songs_genres.genre_id
GROUP BY genres.genre_name
HAVING COUNT(songs_genres.song_id) = (
	SELECT MAX(song_count) FROM (
		SELECT COUNT(song_id) AS song_count FROM songs_genres GROUP BY genre_id
	) AS subquery
);


-- Class 4 --

-- AVG, MIN, MAX, STRING_AGG --

-- Example 1: Retrieve the average rating of all albums.

SELECT AVG(rating) FROM albums

-- Example 2: Find the maximum duration of songs in an album.

SELECT MAX(duration) FROM songs WHERE album_id = 1;

-- Example 3: Retrieve the minimum rating of all albums by a specific artist.

SELECT MIN(rating) FROM albums WHERE artist_id = 1

-- Example 4: Get the count of songs in each album.

SELECT album_id, COUNT(*) FROM songs GROUP BY album_id

-- Example 5: Retrieve the names of all artists along with a comma-separated list of their album names.

SELECT ar.artist_name, STRING_AGG(al.album_name, ',')  AS album_names
FROM artists ar
JOIN albums al ON ar.artist_id = al.artist_id 
GROUP BY ar.artist_name

-- Example 6: Get a comma-separated list of genres for each song along with their respective song names.

SELECT s.song_name, STRING_AGG(g.genre_name, ',') AS genre_names
FROM songs s
JOIN songs_genres sg ON s.song_id = sg.song_id
JOIN genres g ON sg.genre_id = g.genre_id
GROUP BY s.song_name

-- Example 7: Retrieve the album names along with a concatenated string of song names in each album.

SELECT a.album_name, STRING_AGG(s.song_name, ' - ') AS song_names
FROM albums a
JOIN songs s ON  a.album_id = s.album_id
GROUP BY a.album_name

-- Example 8: Retrieve the names of all artists along with a concatenated string of album names sorted alphabetically for each artist.

SELECT ar.artist_name, STRING_AGG(al.album_name, ',' ORDER BY al.album_name) AS album_names
FROM artists ar
JOIN albums  al ON ar.artist_id = al.artist_id
GROUP BY ar.artist_name

-- Example 9: Retrieve the names of all artists who have albums with more then 1 songs.

SELECT ar.artist_name
FROM artists ar
JOIN albums al ON ar.artist_id = al.artist_id
JOIN songs s ON al.album_id = s.album_id
GROUP BY ar.artist_name
HAVING COUNT(*) > 1

-- Example 10: Find the average duration of songs in a specific genre.

SELECT AVG(duration)
FROM songs s
JOIN songs_genres sg ON s.song_id = sg.song_id
JOIN genres g ON sg.genre_id = g.genre_id
WHERE g.genre_id = 1

-- to visualize the data above
SELECT AVG(duration), g.genre_name
FROM songs s
JOIN songs_genres sg ON s.song_id = sg.song_id
JOIN genres g ON sg.genre_id = g.genre_id
GROUP BY g.genre_name

-- Example 11: Retrieve the minimum duration of songs in a specific album.

SELECT MIN(duration)
FROM songs
WHERE album_id = 1

-- Views --

-- Example 1: View to retrieve the album names and their respective artist name.

CREATE VIEW album_artist_view AS 
SELECT al.album_name, ar.artist_name
FROM albums al
JOIN artists ar ON al.artist_id = ar.artist_id

SELECT * FROM album_artist_view

-- Example 2: View to get the count of songs in each album along with the album name.

CREATE VIEW album_songs_count_view AS
SELECT al.album_name, COUNT(*) AS song_count
FROM albums al
JOIN songs s ON al.album_id = s.album_id
GROUP BY al.album_name

SELECT * FROM album_songs_count_view

-- Example 3: View to retrieve the average rating of albums released by each artist.

CREATE VIEW artist_avg_rating_view AS
SELECT ar.artist_name,AVG(al.rating) AS avg_rating
FROM artists ar
JOIN albums al ON ar.artist_id = al.artist_id
GROUP BY ar.artist_name

SELECT * FROM artist_avg_rating_view

-- Example 4: View to retrieve the names of all artists who have albums with a rating higher than the average rating of all albums.

CREATE VIEW high_rated_artist_view AS
SELECT ar.artist_name
FROM artists ar
JOIN albums al ON ar.artist_id = al.artist_id
WHERE al.rating > (SELECT AVG(rating)FROM albums)

SELECT * FROM high_rated_artist_view

-- Example 5: View to retrieve the names of all albums that songs with a duration longer than 4m

CREATE VIEW long_duration_albums_view AS
SELECT al.album_name, s.duration
FROM albums al
JOIN songs s ON al.album_id = s.album_id
WHERE s.duration > interval '4:00'

SELECT * FROM long_duration_albums_view

-- Limit --

-- Example 1: Retrieve the top 5 albums based on rating, along with their artists.

SELECT al.album_name, ar.artist_name, al.rating
FROM albums al
INNER JOIN artists ar ON al.artist_id = ar.artist_id
ORDER BY al.rating DESC
LIMIT 3

-- Example 2: Retrieve the 3 shortest songs and their corresponding albums.

SELECT s.song_name, al.album_name, s.duration
FROM songs s
INNER JOIN albums al ON s.album_id = al.album_id
ORDER BY s.duration ASC
LIMIT 3

-- Example 3: Retrieve the songs and their genres, ordered by genre name.

SELECT s.song_name, g.genre_name
FROM songs s
INNER JOIN songs_genres sg ON s.song_id = sg.song_id
INNER JOIN genres g ON sg.genre_id = g.genre_id
ORDER BY g.genre_name

-- Example 4: Retrieve the albums along with the count of songs in each album, ordered by the number of songs in desceding order.

SELECT al.album_name, COUNT(s.song_id) AS song_count
FROM albums al 
LEFT JOIN songs s ON s.album_id = al.album_id
GROUP BY al.album_name
ORDER BY song_count DESC

-- Example 5: Retrieve the artists who have at least 2 albums, ordered alphabetically by artist name.

SELECT ar.artist_name
FROM artists ar
INNER JOIN albums al ON ar.artist_id = al.artist_id
GROUP BY ar.artist_name
HAVING COUNT(al.album_id) >= 2 
ORDER BY ar.artist_name 

-- Example 6: Get the count of songs in each album along with the corresponding album name.

SELECT a.album_name, COUNT(*) AS song_count
FROM songs s
INNER JOIN albums a ON s.album_id = a.album_id
GROUP BY a.album_name

-- Example 7: Retrieve the album names and their rating in descending order of average rating.

SELECT a.album_name, a.rating
FROM albums a
ORDER BY a.album_name DESC

-- Example 8: Find the average duration of songs in albums with a rating greater than 4.0.

SELECT AVG(duration)
FROM songs s 
JOIN albums a ON s.album_id = a.album_id
WHERE a.rating >4 

-- Example 9: Get the maximum rating among albums in a specific genre

SELECT MAX(rating)
FROM albums a
INNER JOIN songs s ON a.album_id = s.album_id
INNER JOIN songs_genres sg ON s.song_id = sg.song_id
WHERE sg.genre_id = 1

-- Example 10: Find the count of songs in each genre.

SELECT g.genre_name, COUNT(*) AS song_count
FROM genres g
JOIN songs_genres sg ON g.genre_id = sg.genre_id
GROUP BY g.genre_name

-- Example 11: Retrieve the album names and their respective artist names.

SELECT al.album_name, ar.artist_name
FROM albums al
JOIN artists ar ON al.artist_id = ar.artist_id

-- Example 12: Get the average duration of songs in albums by a specific artist.

SELECT AVG(duration) 
FROM songs s 
INNER JOIN albums al ON s.album_id = al.album_id
WHERE al.artist_id = 2

-- Example 13: Retrieve the names of all genres associated with a specific song.

SELECT g.genre_name
FROM genres g
JOIN songs_genres sg ON sg.genre_id = g.genre_id
WHERE sg.song_id = 2

-- Example 14: Find the count fo albums released by each artist.

SELECT ar.artist_name, COUNT(*) AS album_count
FROM albums al
JOIN artists ar ON al.artist_id = ar.artist_id
GROUP BY ar.artist_name

-- Example 15: Retrieve the names of all artists who have albums with a rating higher than 4.0 and have at least 3 songs in their album.

SELECT ar.artist_name
FROM artists ar
INNER JOIN albums al ON ar.artist_id = al.artist_id
INNER JOIN songs s ON al.album_id = s.album_id
WHERE al.rating > 4.0
GROUP BY ar.artist_name
HAVING COUNT(s.song_id) >= 2

-- Example 16: Retrieve the album names along with a concatenated string of song names in each albums.

SELECT al.album_name, STRING_AGG(s.song_name, ',') AS song_names
FROM albums al
JOIN songs s ON al.album_id = s.album_id
GROUP BY al.album_name

-- Example 17: Retrieve the names of all artists who have albums with a rating higer than the average rating of all albums and have at least one song longer than 5 minutres.

SELECT ar.artist_name
FROM artists ar
JOIN albums al ON al.artist_id = ar.artist_id
JOIN songs s ON al.album_id = s.album_id
WHERE al.rating > (SELECT AVG(rating)FROM albums)
GROUP BY ar.artist_name
HAVING MAX (s.duration) > interval '5:00'








