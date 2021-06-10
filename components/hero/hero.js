import react from 'react'

export default function HERO(props) {
    return(
        <div class="mx-auto w-full">
            <div class="grid grid-cols-9">
                <div></div>
                <div id="pagewrap" className="col-span-7">
                <img src={props.heroimage} className=" flex-shrink w-full" title="asdfasdoij"></img>
                </div>
                <div></div>

            </div>
        </div>
    )
}