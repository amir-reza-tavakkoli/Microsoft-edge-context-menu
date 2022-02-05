import OptionCategory from './OptionCategory';
import Item from "./Item";
import SVGWrapper from './SVGWrapper';

const OptionList = (props) => {
    let svg = (
        <SVGWrapper>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                    d="M7.49956 8.74427C7.84708 8.36181 8.41524 7.99994 9.24996 7.99994C10.4023 7.99994 11.1442 8.792 11.4045 9.66118C11.6581 10.5078 11.5043 11.5564 10.785 12.279C10.5378 12.5274 10.2468 12.7521 9.99212 12.9487L9.9514 12.9802C9.67221 13.196 9.42286 13.3916 9.20288 13.6109C8.94689 13.8663 8.73824 14.1454 8.61656 14.4999H10.75C11.1642 14.4999 11.5 14.8357 11.5 15.2499C11.5 15.6642 11.1642 15.9999 10.75 15.9999H7.74996C7.55104 15.9999 7.36027 15.9209 7.21962 15.7803C7.07897 15.6396 6.99995 15.4488 6.99996 15.2499C6.99998 14.003 7.52397 13.1669 8.14363 12.5489C8.44003 12.2533 8.7618 12.0038 9.03412 11.7934L9.03711 11.791C9.32312 11.57 9.54503 11.3985 9.72185 11.2208C9.99417 10.9473 10.0887 10.4958 9.96757 10.0915C9.85324 9.70976 9.59759 9.49994 9.24996 9.49994C8.89717 9.49994 8.71534 9.63676 8.60973 9.753C8.55037 9.81832 8.50976 9.88475 8.48499 9.93316C8.47292 9.95674 8.46562 9.97407 8.46245 9.98203L8.46139 9.98474C8.33241 10.3717 7.91657 10.5855 7.52572 10.463C7.13045 10.3392 6.91042 9.91835 7.03426 9.52308L7.06895 9.42691C7.08751 9.38032 7.1139 9.31973 7.14969 9.24981C7.22062 9.1112 7.33236 8.92829 7.49956 8.74427ZM13.25 8.00003C13.6642 8.00003 14 8.33582 14 8.75003V11.4993H15.5V8.75003C15.5 8.33582 15.8358 8.00003 16.25 8.00003C16.6642 8.00003 17 8.33582 17 8.75003V15.2204C17 15.6346 16.6642 15.9704 16.25 15.9704C15.8358 15.9704 15.5 15.6346 15.5 15.2204V12.9993H13.25C12.8358 12.9993 12.5 12.6635 12.5 12.2493V8.75003C12.5 8.33582 12.8358 8.00003 13.25 8.00003ZM22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12ZM3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12Z"
                    fill="#212121"
                />
            </svg>
        </SVGWrapper>
    );
    return (
        <>
            <article className="optionList">
                <ul className="optionList__list">
                    <OptionCategory>
                        <Item hasOption={true} hasIcon = {true} Icon={svg}>eee</Item>
                        <Item hasOption="true">eee</Item>
                        <Item hasOption="true">eee</Item>
                    </OptionCategory>
                </ul>
            </article>
        </>
    );
}

export default OptionList;