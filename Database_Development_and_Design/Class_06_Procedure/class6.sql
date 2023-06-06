-- Transaction Example

BEGIN TRANSACTION

-- Insert a new album
INSERT INTO albums (album_id,artist_id,album_name) VALUES (5, 2, 'The Greatest Hits');

-- Update the rating of an existing album
UPDATE albums SET rating = 4.5 WHERE album_id = 3;

COMMIT

-- To stop the transaction
ROLLBACK;

-- Stored Procedure
CREATE OR REPLACE PROCEDURE calculate_total_duration_prod(p_album_id int, OUT total_duration interval)
AS $$
BEGIN
	SELECT COALESCE(SUM(duration), interval '0') INTO total_duration
	FROM songs
	WHERE album_id = p_album_id;
END;
$$ LANGUAGE plpgsql;

CALL calculate_total_duration_prod(1, '00:00')

-- Procedure 2 - Create artist and album
CREATE OR REPLACE PROCEDURE create_artist_and_album()
LANGUAGE plpgsql
AS $$ 
DECLARE
	artist_id_var int;
BEGIN
	-- Insert a new artist and retrieve the artist_id
	WITH inserted_artist AS (
		INSERT INTO artists (artist_name) VALUES ('Nob Artist') RETURNING artist_id
	)
	SELECT artist_id INTO artist_id_var FROM inserted_artist;
	
	-- Use the artist_id_var in ausequest statement
	BEGIN 
		INSERT INTO albums (album_name,artist_id, rating)
		VALUES ('Album 1', artist_id_var, 4.5);
	EXCEPTION 
		WHEN OTHERS THEN
		-- Handle any errors
		RAISE NOTICE 'Error occured: %', SQLERRM;
	END;
	
	-- Log the artist id
	RAISE NOTICE 'Artist ID: %',artist_id_var;
END;
$$;

CALL create_artist_and_album();
		
-- Procedure 3 - Get Songs Count Per Genre

CREATE OR REPLACE PROCEDURE get_song_count_per_genre()
LANGUAGE plpgsql
AS $$
BEGIN
	-- Create temp table to hold the result
	CREATE TEMPORARY TABLE genre_song_count(
	genre_name text,
	song_count int
	);
	
	-- Insert the song count per genre into the temp table
	INSERT INTO genre_song_count
	SELECT g.genre_name, COUNT(*) AS song_count
	FROM genres g
	JOIN songs_genres sg ON g.genre_id = sg.genre_id
	GROUP BY g.genre_name;
	
	-- Perform the query to discard the results
	PERFORM * FROM genre_song_count;
	
	-- Drop the temp table
	DROP TABLE genre_song_count;
	
END;
$$;

CALL get_song_count_per_genre()
		
SELECT * FROM artists;
SELECT * FROM albums;















