import { property } from 'survey-core';

export default {
    editor: {
        label: {
            en: 'Survey',
        },
    },
    properties: {
        licenseKey: {
            label: {
                en: 'License key',
            },
            type: 'Text',
            defaultValue: '',
            bindable: true,
        },
        idComponentBind: {
            label: {
                en: 'Content variable id',
            },
            type: 'Text',
            defaultValue: '',
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
    },
    triggerEvents: [
        {
            name: 'json:save',
            label: { en: 'On json saved' },
            event: '',
        },
    ],
};
