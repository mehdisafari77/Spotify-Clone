function Player() {
    return (
        <div className="h-24 bg-gradient-to-b from-black to-gray-900 border-gray-900 text-white grid grid-cols-3 text-xs md:text-base px-2 md:px-8">
          <div className="flex items-center space-x-4">
            <img
              className="hidden md:inline h-10 w-10"
              src={songInfo?.album.images?.[0]?.url}
              alt=""
            />
            <div>
              <h3>{songInfo?.name}</h3>
              <p>{songInfo?.artists?.[0]?.name}</p>
            </div>
            <HeartIcon className="hidden md:inline h-5 w-5" />
          </div>
    
          <div className="flex items-center justify-evenly">
            <SwitchHorizontalIcon className="button" />
            <RewindIcon
              // onClick={() => spotifyApi.skipToPrevious()} -- The API is not working
              className="button"
            />
            {isPlaying ? (
              <PauseIcon className="button w-10 h-10" onClick={handlePlayPause} />
            ) : (
              <PlayIcon onClick={handlePlayPause} className="button w-10 h-10" />
            )}
            <FastForwardIcon
              // onClick={() => spotifyApi.skipToNext()} -- The API is not working
              className="button"
            />
            <ReplyIcon className="button" />
          </div>
    
          <div className="flex items-center space-x-3 md:space-x-4 justify-end pr-5">
            <VolumeDownIcon
              onClick={() => volume > 0 && setVolume(volume - 10)}
              className="button"
            />
            <input
              type="range"
              className="w-14 md:w-28"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              min={0}
              max={100}
            />
    
            <VolumeUpIcon
              onClick={() => volume < 100 && setVolume(volume + 10)}
              className="button"
            />
          </div>
        </div>
      );
    }
    
    export default Player;
    