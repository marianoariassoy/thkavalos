const TopBar = () => {
  return (
    <div className="bg-secondary py-2 flex justify-end items-center text-white px-8 text-sm">
      <div className="flex items-center gap-3">
        <div>
          <a href="https://www.instagram.com/thk.avalos/" target="_blank" rel="noopener noreferrer" className="svg-hover">
            <svg id="uuid-5851f45a-ce4c-4670-bbcc-447e4defaebc" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 7.7 7.7">
              <path d="M6.9,0H.8C.3,0,0,.3,0,.8V6.9c0,.4,.3,.8,.8,.8H6.9c.4,0,.8-.3,.8-.8V.8c0-.4-.3-.8-.8-.8h0ZM3.9,2.3c.8,0,1.5,.7,1.5,1.5s-.7,1.5-1.5,1.5-1.5-.7-1.5-1.5,.7-1.5,1.5-1.5h0ZM1,6.9c-.1,0-.2,0-.2-.2V3.5h.8c0,.1,0,.3,0,.4,0,1.3,1,2.3,2.3,2.3s2.3-1,2.3-2.3,0-.3,0-.4h.8v3.3c0,.1,0,.2-.2,.2H1ZM6.9,1.7c0,.1,0,.2-.2,.2h-.8c-.1,0-.2,0-.2-.2V1c0-.1,0-.2,.2-.2h.8c.1,0,.2,0,.2,.2v.8Z" />
            </svg>
          </a>
        </div>

        <div>|</div>

        <div className="flex items-center gap-2">
          ENG
          <a href="#" className="svg-hover">
            <svg id="uuid-41740953-bb0c-4ab0-b69d-c06d31763925" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" width="2.3mm" height="1mm" viewBox="0 0 6.5 2.9">
              <g id="uuid-e111909c-357a-4c71-a4d9-a7f1815bb448" data-name="Layer 1">
                <polygon points="6.5 0 3.3 2.9 0 0 6.5 0 6.5 0" />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
