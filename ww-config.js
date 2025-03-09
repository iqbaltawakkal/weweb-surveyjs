import { property } from 'survey-core';

export default {
    editor: {
        label: {
            en: 'Survey',
        },
    },
    properties: {
        surveyId: {
            label: {
                en: 'Survey ID',
            },
            type: 'Text',
            defaultValue: '',
            bindable: true,
        },
        surveyApiUrl: {
            label: {
                en: 'Survey API url',
            },
            type: 'Text',
            defaultValue: '',
            bindable: true,
        },
        licenseKey: {
            label: {
                en: 'License key',
            },
            type: 'Text',
            defaultValue: '',
            bindable: true,
        },
        componentBind: {
            label: {
                en: 'Content variable',
            },
            type: 'Text',
            defaultValue: '',
            bindable: true,
        },
        injectedQuestions: {
            label: {
                en: 'Injected questions',
            },
            type: 'Text',
            defaultValue: '',
            bindable: true,
        },
        fontSize: {
            label: {
                en: 'Font size',
            },
            type: 'TextSelect',
            options: {
                options: [
                    { value: '10px', label: { en: '10px' } },
                    { value: '11px', label: { en: '11px' } },
                    { value: '12px', label: { en: '12px' } },
                    { value: '13px', label: { en: '13px' } },
                    { value: '14px', label: { en: '14px' } },
                    { value: '15px', label: { en: '15px' } },
                    { value: '16px', label: { en: '16px' } },
                    { value: '17px', label: { en: '17px' } },
                    { value: '18px', label: { en: '18px' } },
                    { value: '19px', label: { en: '19px' } },
                    { value: '20px', label: { en: '20px' } },
                    { value: '21px', label: { en: '21px' } },
                    { value: '22px', label: { en: '22px' } },
                    { value: '23px', label: { en: '23px' } },
                    { value: '24px', label: { en: '24px' } },
                    { value: '25px', label: { en: '25px' } },
                    { value: '26px', label: { en: '26px' } },
                    { value: '27px', label: { en: '27px' } },
                    { value: '28px', label: { en: '28px' } },
                    { value: '29px', label: { en: '29px' } },
                    { value: '30px', label: { en: '30px' } },
                ],
            },
            defaultValue: '14px',
            bindable: true,
        },
        showLogicTab: {
            label: {
                en: 'Show logic tab',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
        },
        showJSONEditorTab: {
            label: {
                en: 'Show JSON editor tab',
            },
            type: 'OnOff',
            defaultValue: false,
            bindable: true,
        },
        showThemeTab: {
            label: {
                en: 'Show theme tab',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
        },
        themeColor: {
            label: {
                en: 'Theme color',
            },
            type: 'Color',
            defaultValue: '#19b394',
            bindable: true,
        },
        //  components condition
        showBoolean: {
            label: {
                en: 'Show boolean',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
        },
        showCheckbox: {
            label: {
                en: 'Show checkbox',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
        },
        showComment: {
            label: {
                en: 'Show comment',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
        },
        showDropdown: {
            label: {
                en: 'Show dropdown',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
        },
        showTagbox: {
            label: {
                en: 'Show tagbox',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
        },
        showExpression: {
            label: {
                en: 'Show expression',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
        },
        showFile: {
            label: {
                en: 'Show file',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
        },
        showHtml: {
            label: {
                en: 'Show html',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
        },
        showImage: {
            label: {
                en: 'Show image',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
        },
        showImagepicker: {
            label: {
                en: 'Show imagepicker',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
        },
        showMatrix: {
            label: {
                en: 'Show matrix',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
        },
        showMatrixdropdown: {
            label: {
                en: 'Show matrixdropdown',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
        },
        showMatrixdynamic: {
            label: {
                en: 'Show matrixdynamic',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
        },
        showMultipletext: {
            label: {
                en: 'Show multipletext',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
        },
        showPanel: {
            label: {
                en: 'Show panel',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
        },
        showPaneldynamic: {
            label: {
                en: 'Show paneldynamic',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
        },
        showRadiogroup: {
            label: {
                en: 'Show radiogroup',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
        },
        showRating: {
            label: {
                en: 'Show rating',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
        },
        showRanking: {
            label: {
                en: 'Show ranking',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
        },
        showSignaturepad: {
            label: {
                en: 'Show signaturepad',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
        },
        showText: {
            label: {
                en: 'Show text',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
        },
        showMenuGeneral: {
            label: {
                en: 'Show menu General',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
        },
        showMenuLogoInTheSurveyHeader: {
            label: {
                en: 'Show menu Logo in the survey header',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
        },
        showMenuNavigation: {
            label: {
                en: 'Show menu Navigation',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
        },
        showMenuQuestionSettings: {
            label: {
                en: 'Show menu Question settings',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
        },
        showMenuPages: {
            label: {
                en: 'Show menu Pages',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
        },
        showMenuConditions: {
            label: {
                en: 'Show menu condition',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
        },
        showMenuData: {
            label: {
                en: 'Show menu data',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
        },
        showMenuValidation: {
            label: {
                en: 'Show menu validation',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
        },
        showMenuThankYouPage: {
            label: {
                en: 'Show menu Thank you page',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
        },
        showMenuQuizMode: {
            label: {
                en: 'Show menu Quiz mode',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
        },
    },
    triggerEvents: [
        {
            name: 'json:save',
            label: { en: 'On json saved' },
            event: '',
        },
    ],
};
