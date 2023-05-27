-- Tables

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

-- Inserting Data

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
		
-- Selects

SELECT * FROM artists
SELECT * FROM albums
SELECT * FROM songs
SELECT * FROM genres
SELECT * FROM songs_genres


-- Temporary Tables

CREATE TEMPORARY TABLE temp_album_artists AS
SELECT albums.album_name, artists.artist_name, albums.rating
FROM albums
INNER JOIN artists ON albums.artist_id = artists.artist_id

SELECT * FROM temp_album_artists

-- Building in Functions

DO $$

DECLARE
	full_title varchar(100);
BEGIN
	SELECT CONCAT(ar.artist_name, ' - ', al.album_name)
	INTO full_title
	FROM artists ar
	INNER JOIN albums al ON ar.artist_id = al.artist_id
	WHERE al.album_id = 1;
	
	RAISE NOTICE 'Full Title: %', full_title;
END $$;


DO $$

DECLARE
	album_id_var int := 2;
	upper_song_name varchar(100);
BEGIN
	SELECT UPPER(song_name)
	INTO upper_song_name
	FROM songs
	WHERE album_id = album_id_var;
	
	RAISE NOTICE 'Uppercase Song Name';
	RAISE NOTICE '%', upper_song_name;
END $$;

-- Length

DO $$

DECLARE
	v_album_id int :=3;
	artist_lenght int;
BEGIN
	SELECT LENGTH(ar.artist_name)
	INTO artist_lenght
	FROM artists ar 
	INNER JOIN albums al ON ar.artist_id = al.artist_id
	WHERE al.album_id = v_album_id;
	
	RAISE NOTICE 'Artist Name Lenght :%', artist_lenght;

END $$;

-- ABS -Absolute Value

DO $$

DECLARE 
	song1_duration numeric := 200;
	song2_duration numeric :=180;
	duration_diff numeric;
BEGIN
	duration_diff := ABS(song1_duration - song2_duration);
	
	RAISE NOTICE 'Absolute Duration Difference: %', duration_diff;
	
END $$

-- Random 

DO $$

DECLARE
	random_song_id numeric;
	random_song_name varchar(100);
BEGIN 
	SELECT song_id,song_name
	INTO random_song_id,random_song_name
	FROM songs
	ORDER BY RANDOM()
	LIMIT 1;
	
	RAISE NOTICE 'Random song ID: %', random_song_id;
	RAISE NOTICE 'Random song Name: %', random_song_name;
		
END $$;

-- Floor

DO $$

DECLARE
	average_duration numeric;
	rounded_duration numeric;
BEGIN
	SELECT AVG(EXTRACT(EPOCH FROM duration)) -- Convert interval into seconds
	INTO average_duration
	FROM songs;
	
	rounded_duration := FLOOR(average_duration);

	RAISE NOTICE 'Rounded Average Duration (in seconds): %',rounded_duration;
	
END $$;

-- Round

DO $$

DECLARE
	average_rating numeric;
	rounded_rating numeric;
BEGIN
	SELECT AVG(rating)
	INTO average_rating
	FROM albums;
	
	rounded_rating := ROUND(average_rating, 1); -- Round to one decimal place
	
	RAISE NOTICE 'Rounded Average Rating: %',rounded_rating;
	
END $$;

-- Sum

CREATE OR REPLACE FUNCTION calculate_total_duration(p_album_id int)
	RETURNS interval
AS $$

DECLARE
	total_duration interval;
	
BEGIN 
	SELECT SUM(duration)
	INTO total_duration
	FROM songs
	WHERE songs.album_id = p_album_id;
	
	RETURN total_duration;
END;
$$ LANGUAGE plpgsql;

SELECT calculate_total_duration(4)


-- Example 1: Function to format the duration of a song in minutes and seconds.

CREATE OR REPLACE FUNCTION format_duration(p_duration interval)
	RETURNS varchar
AS $$

DECLARE
	minutes int;
	seconds int;
	formated_duration varchar;
	
BEGIN
	minutes := EXTRACT(MINUTE FROM p_duration);
	seconds := EXTRACT(SECOND FROM p_duration);
	
	IF minutes > 0 THEN
		formated_duration := minutes || 'm ';
	ELSE -- ELSE IF exists
		formated_duration := '';
	END IF;
	
	formated_duration := formated_duration || seconds || 's ';
	
	RETURN formated_duration;
END;
$$ LANGUAGE plpgsql;

SELECT format_duration('00:02:34':: interval)

-- Table Valued Function

CREATE OR REPLACE FUNCTION get_songs_with_duration()
	RETURNS TABLE (song_name varchar, formatted_duration varchar)
AS $$
BEGIN 
	RETURN QUERY
		SELECT s.song_name, format_duration(duration) AS formatted_duration
		FROM songs s;
		
END;
$$ LANGUAGE plpgsql;


SELECT * FROM get_songs_with_duration();

-- If Not Found

CREATE OR REPLACE FUNCTION get_song_duration(p_song_id int)
	RETURNS interval 
AS $$

DECLARE
	song_duration interval;
	
BEGIN
	-- Retrieve the duration of the song
	SELECT duration INTO song_duration 
	FROM songs
	WHERE songs.song_id = p_song_id;
	
	--Handle duration doesn't exist
	
	IF NOT FOUND THEN 
		song_duration := null;
	END IF;
	
	RETURN song_duration;
END;
$$ LANGUAGE plpgsql;

SELECT * FROM get_song_duration(1);

-- Triggers

ALTER TABLE albums
ADD COLUMN total_duration interval;

-- Creating a trigger function
CREATE OR REPLACE FUNCTION update_album_duration()
	RETURNS TRIGGER
AS $$
BEGIN
	-- Update the total duration of the album when a song is inserted
	IF TG_OP = 'INSERT' THEN
		UPDATE albums
		SET total_duration = COALESCE(total_duration, '00:00:00') + NEW.duration
		WHERE album_id = NEW.album_id;
	
	-- Update the total duration of the album when a song is deleted
	ELSEIF TG_OP = 'DELETE' THEN
		UPDATE albums
		SET total_duration = COALESCE(total_duration, '00:00:00') - OLD.duration
		WHERE album_id = OLD.album_id;
	
	-- Update the total duration of the album when a song is updated
	ELSEIF TG_OP = 'UPDATE' THEN
		-- Calculate the difference in duration
		DECLARE
			duration_diff INTERVAL := NEW.duration - OLD.duration;
		BEGIN
			-- Update the total duration of the album by adding duration difference
			UPDATE albums
			SET total_duration = COALESCE(total_duration, '00:00:00') + duration_diff
			WHERE album_id = NEW.album_id;
		END;
	END IF;
		
		
	RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Create the Trigger

CREATE TRIGGER update_album_duration_trigger
AFTER INSERT OR DELETE OR UPDATE ON songs
FOR EACH ROW
EXECUTE FUNCTION update_album_duration();


INSERT INTO albums (album_name,rating,artist_id)
VALUES ('The Massacre', 3.4, 2)

INSERT INTO songs (song_name, duration, album_id)
VALUES ('Disco Inferno', '03:15', 6)

INSERT INTO songs (song_name, duration, album_id)
VALUES ('Ayo Techology', '04:10', 6)

DELETE FROM songs 
WHERE song_id = 9

SELECT * FROM albums

UPDATE songs
SET duration = '06:45'
WHERE song_id = 8

-- Indexes

CREATE INDEX idx_album_name ON albums (album_name)










-- Function template

DO $$

DECLARE

BEGIN
	SELECT
	
	
	RAISE NOTICE 
	
END $$;

-- Create Function template

CREATE OR REPLACE FUNCTION function_name(p_param int)
	RETURNS interval -- int etc...
AS $$

DECLARE

	
BEGIN 

	
	RETURN ;
END;
$$ LANGUAGE plpgsql;

-- Table Valued Function template

CREATE OR REPLACE FUNCTION function_name()
	RETURNS TABLE ()-- stuff in the table
AS $$

BEGIN 
	RETURN QUERY
		SELECT 
		
END;
$$ LANGUAGE plpgsql;

-- Trigger template

CREATE OR REPLACE FUNCTION function_name()
	RETURNS TRIGGER
AS $$
BEGIN
	-- Update the data of the Table when a property is inserted
	IF TG_OP = 'INSERT' THEN
		UPDATE property_table
		SET total_property = COALESCE(total_property, '00:00:00') + NEW.property
		WHERE property_id = NEW.property_id;
	
	-- Update the data of the Table when a property is deleted
	ELSEIF TG_OP = 'DELETE' THEN
		UPDATE property_table
		SET total_property = COALESCE(total_property, '00:00:00') - OLD.property
		WHERE property_id = OLD.property_id;
	
	-- Update the data of the Table when a property is updated
	ELSEIF TG_OP = 'UPDATE' THEN
		DECLARE
			property_diff interval := NEW.property - OLD.property;
		BEGIN
			-- Update the total duration of the album by adding duration difference
			UPDATE property_table
			SET total_property = COALESCE(total_property, '00:00:00') + property_diff
			WHERE property_id = NEW.property_id;
		END;
	END IF;
		
		
	RETURN NULL;
END;
$$ LANGUAGE plpgsql;





