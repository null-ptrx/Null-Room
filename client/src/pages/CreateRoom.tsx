import { Link } from 'react-router-dom'

const CreateRoom = () => {
  return (
    <div className="min-h-screen bg-white text-[#222] font-['Verdana','Arial',sans-serif] text-[13px] p-4 flex items-center justify-center">
      <div className="w-full max-w-[560px] border border-[#b9b9b9] bg-white">
        <div className="bg-[#e1e1e1] px-3 py-1.5 font-bold border-b border-[#b9b9b9]">
          Create Room
        </div>

        <form className="p-4 flex flex-col gap-4">
          {/* Basic */}
          <div className="flex flex-col gap-3">
            <div className="font-bold border-b border-[#b9b9b9] pb-1">Basic</div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <label htmlFor="roomName" className="sm:w-44 shrink-0">Room name:</label>
              <div className="flex-1">
                <input id="roomName" name="roomName" type="text" maxLength={40} placeholder="e.g. DSA practice" className="w-full border border-[#b9b9b9] px-2 py-1 bg-white text-[#222] text-[13px] outline-none" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
              <label htmlFor="description" className="sm:w-44 shrink-0 sm:pt-1">Description:</label>
              <div className="flex-1">
                <textarea id="description" name="description" rows={2} className="w-full border border-[#b9b9b9] px-2 py-1 bg-white text-[#222] text-[13px] outline-none resize-none" />
                <span className="text-[11px] text-[#777] block mt-0.5">One or two lines about this room</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <label htmlFor="language" className="sm:w-44 shrink-0">Language:</label>
              <div className="flex-1">
                <select id="language" name="language" className="w-full border border-[#b9b9b9] px-2 py-1 bg-white text-[#222] text-[13px] outline-none">
                  <option value="javascript">JavaScript</option>
                  <option value="python">Python</option>
                  <option value="cpp">C++</option>
                  <option value="java">Java</option>
                </select>
              </div>
            </div>
          </div>

          {/* Access */}
          <div className="flex flex-col gap-3">
            <div className="font-bold border-b border-[#b9b9b9] pb-1">Access</div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <label htmlFor="maxMembers" className="sm:w-44 shrink-0">Max members:</label>
              <div className="flex-1">
                <select id="maxMembers" name="maxMembers" defaultValue="10" className="w-full border border-[#b9b9b9] px-2 py-1 bg-white text-[#222] text-[13px] outline-none">
                  {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <span className="sm:w-44 shrink-0">Visibility:</span>
              <div className="flex-1 flex items-center gap-4">
                <label htmlFor="visibilityPublic" className="flex items-center gap-1 cursor-pointer">
                  <input type="radio" id="visibilityPublic" name="visibility" value="public" defaultChecked />
                  <span>Public</span>
                </label>
                <label htmlFor="visibilityPrivate" className="flex items-center gap-1 cursor-pointer">
                  <input type="radio" id="visibilityPrivate" name="visibility" value="private" />
                  <span>Private</span>
                </label>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
              <label htmlFor="password" className="sm:w-44 shrink-0 sm:pt-1">Password:</label>
              <div className="flex-1">
                <input id="password" name="password" type="password" className="w-full border border-[#b9b9b9] px-2 py-1 bg-white text-[#222] text-[13px] outline-none" />
                <span className="text-[11px] text-[#777] block mt-0.5">Only for private rooms</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <label htmlFor="allowGuests" className="sm:w-44 shrink-0">Allow guests:</label>
              <div className="flex-1 flex items-center">
                <input id="allowGuests" name="allowGuests" type="checkbox" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <label htmlFor="defaultRole" className="sm:w-44 shrink-0">Default role for new members:</label>
              <div className="flex-1">
                <select id="defaultRole" name="defaultRole" className="w-full border border-[#b9b9b9] px-2 py-1 bg-white text-[#222] text-[13px] outline-none">
                  <option value="null">Null (view only)</option>
                  <option value="sudo">Sudo (can edit)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-col gap-3">
            <div className="font-bold border-b border-[#b9b9b9] pb-1">Features</div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <label htmlFor="audioAllowed" className="sm:w-44 shrink-0">Audio allowed:</label>
              <div className="flex-1 flex items-center">
                <input id="audioAllowed" name="audioAllowed" type="checkbox" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <label htmlFor="videoAllowed" className="sm:w-44 shrink-0">Video allowed:</label>
              <div className="flex-1 flex items-center">
                <input id="videoAllowed" name="videoAllowed" type="checkbox" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <label htmlFor="chatEnabled" className="sm:w-44 shrink-0">Chat enabled:</label>
              <div className="flex-1 flex items-center">
                <input id="chatEnabled" name="chatEnabled" type="checkbox" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
              <label htmlFor="tags" className="sm:w-44 shrink-0 sm:pt-1">Tags:</label>
              <div className="flex-1">
                <input id="tags" name="tags" type="text" className="w-full border border-[#b9b9b9] px-2 py-1 bg-white text-[#222] text-[13px] outline-none" />
                <span className="text-[11px] text-[#777] block mt-0.5">Comma separated, e.g. dsa, web dev, beginner</span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4 pt-2 border-t border-[#b9b9b9]">
            <button type="submit" className="bg-[#f0f0f0] border border-[#b9b9b9] px-3 py-1 text-[#222] font-bold hover:bg-[#e8e8e8] cursor-pointer">
              Create Room
            </button>
            <Link to="/" className="text-[#0000cc] hover:underline">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateRoom
