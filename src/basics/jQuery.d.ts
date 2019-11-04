declare function jQuery(selector: string): any;
declare function jQuery(domReadyCallback: () => any): any;

declare namespace jQuery {
    interface AjaxSettings {
        method?: 'GET' | 'POST'
        data?: any;
    }

    function ajax(url: string, settings?: AjaxSettings): void;

    namespace fn {
        function extend(object: any): void;
    }
    const version: number;

    class Event {
        blur(eventType: EventType): void;
    }

    enum EventType {
        CustomClick
    }
}
