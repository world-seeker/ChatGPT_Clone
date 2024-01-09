import NewChat from "../atoms/NewChat"


function Sidebar() {
  return (
    <div className="p-2 flex flex-col h-screen">
        <div className="flex-1">
            {/* New Chat */}
            <NewChat/>
            <div>
                {/* ModleSleection */}

            </div>

            {/* Map through the chatrows */}

        </div>
    </div>
  )
}

export default Sidebar