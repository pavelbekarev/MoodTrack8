import { 
    Panel, 
    Div, 
    FormLayout,
    FormLayoutGroup,
    FormItem,
    Calendar,
    LocaleProvider,
    Spacing,
    Cell,
    ModalPage,
    ModalPageHeader,
    ModalRoot

} from "@vkontakte/vkui";
import { useState } from "react";


export const EmotionsModal = (props) => {
    activeModal = props.activeModal;

    

    return (
        <ModalRoot activeModal={activeModal}>
            <ModalPage
                id="EMOTIONS_MODAL_PAGE"
                settlingHeight={100}
                header={
                    <ModalPageHeader>
                        Выбери свою эмоцию!
                    </ModalPageHeader>
                }
            >
                <Div className="emotions_wrapper">
                    <Cell 
                        id="frame20"
                    >
                        <img className="cell_img" src={frame20} alt="" />
                    </Cell>
                    <Cell 
                        id="frame24"
                    >
                        <img className="cell_img" src={frame24} alt="" />
                    </Cell>
                    <Cell 
                        id="frame21"
                    >
                        <div className="cell">
                            <img className="cell_img" src={frame21} alt="" />
                        </div>
                    </Cell>
                    <Cell 
                        id="frame22"
                    >
                        <div className="cell">
                            <img className="cell_img" src={frame22} alt="" />
                        </div>
                    </Cell>
                    <Cell 
                        id="frame23"
                    >
                        <div className="cell">
                            <img className="cell_img" src={frame23} alt="" />
                        </div>
                    </Cell>
                </Div>
            </ModalPage>
        </ModalRoot>

    );
}

