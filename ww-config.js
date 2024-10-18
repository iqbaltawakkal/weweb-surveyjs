import { property } from 'survey-core';

export default {
    editor: {
        label: {
            en: 'Survey',
        },
    },
    properties: {
        showLogicTab: {
            label: {
                en: 'Show logic tab',
            },
            type: 'OnOff',
            defaultValue: true,
        },
        showJSONEditorTab: {
            label: {
                en: 'Show JSON editor tab',
            },
            type: 'OnOff',
            defaultValue: false,
        },
        showThemeTab: {
            label: {
                en: 'Show theme tab',
            },
            type: 'OnOff',
            defaultValue: true,
        },
        themeColor: {
            label: {
                en: 'Theme color',
            },
            type: 'Color',
            defaultValue: '#19b394',
        },
    },
};
