
import React, { useState, useRef } from 'react';
import './Dashboard.css'
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';
import { StyleClass } from 'primereact/styleclass';
import { Menu } from 'primereact/menu';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';

import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Toolbar } from 'primereact/toolbar';

function Dashboard(){
    const [visible, setVisible] = useState(false);
    const btnRef1 = useRef(null);
    const btnRef2 = useRef(null);
    const btnRef3 = useRef(null);
    const btnRef4 = useRef(null);
    const toast = useRef(null);
    const menuRight = useRef(null);
    const itemRenderer = (item) => (
        <div className='p-menuitem-content'>
            <a className="flex align-items-center p-menuitem-link">
                <span className={item.icon} />
                <span className="mx-2">{item.label}</span>
                {/* {item.badge && <Badge className="ml-auto" value={item.badge} />}
                {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>} */}
            </a>
        </div>
    );
    const menuitemRenderer = (item) => (
        <a className="flex align-items-center p-menuitem-link">
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </a>
    );
    let items = [
        // {
        //     template: () => {
        //         return (
        //             <span className="inline-flex align-items-center gap-1 px-2 py-2">
                        
        //                 <span className="font-medium text-xl font-semibold">
        //                     PRIME<span className="text-primary">APP</span>
        //                 </span>
        //             </span>
        //         );
        //     }
        // },
        // {
        //     separator: true
        // },
        {
            label: 'Documents',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus',
                    shortcut: '⌘+N',
                    template: itemRenderer
                },
                {
                    label: 'Search',
                    icon: 'pi pi-search',
                    shortcut: '⌘+S',
                    template: itemRenderer
                }
            ]
        },
        {
                 separator: true
        },
        {
            label: 'Profile',
            items: [
                {
                    label: 'Settings',
                    icon: 'pi pi-cog',
                    shortcut: '⌘+O',
                    template: itemRenderer
                },
                {
                    label: 'Messages',
                    icon: 'pi pi-inbox',
                    badge: 2,
                    template: itemRenderer
                },
                {
                    label: 'Logout',
                    icon: 'pi pi-sign-out',
                    shortcut: '⌘+Q',
                    template: itemRenderer
                }
            ]
        },
        {
            separator: true
   },
        {
            label: 'Documents',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus',
                    shortcut: '⌘+N',
                    template: itemRenderer
                },
                {
                    label: 'Search',
                    icon: 'pi pi-search',
                    shortcut: '⌘+S',
                    template: itemRenderer
                }
            ]
        },
        {
                 separator: true
        },
        {
            label: 'Documents',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus',
                    shortcut: '⌘+N',
                    template: itemRenderer
                },
                {
                    label: 'Search',
                    icon: 'pi pi-search',
                    shortcut: '⌘+S',
                    template: itemRenderer
                }
            ]
        },
        {
                 separator: true
        },
        {
            label: 'Documents',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus',
                    shortcut: '⌘+N',
                    template: itemRenderer
                },
                {
                    label: 'Search',
                    icon: 'pi pi-search',
                    shortcut: '⌘+S',
                    template: itemRenderer
                }
            ]
        },
        {
                 separator: true
        },
        {
            label: 'Documents',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus',
                    shortcut: '⌘+N',
                    template: itemRenderer
                },
                {
                    label: 'Search',
                    icon: 'pi pi-search',
                    shortcut: '⌘+S',
                    template: itemRenderer
                }
            ]
        },
        {
                 separator: true
        },
        // {
        //     separator: true
        // },
        // {
        //     command: () => {
        //         toast.current.show({ severity: 'info', summary: 'Info', detail: 'Item Selected', life: 3000 });
        //     },
        //     template: (item, options) => {
        //         return (
        //             <button onClick={(e) => options.onClick(e)} className={classNames(options.className, 'w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround')}>
        //                 <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="mr-2" shape="circle" />
        //                 <div className="flex flex-column align">
        //                     <span className="font-bold">Amy Elsner</span>
        //                     <span className="text-sm">Agent</span>
        //                 </div>
        //             </button>
        //         );
        //     }
        // }
    ];



    const sidemenuitems = [
       
                
                {
                    label: 'Logout',
                    icon: 'pi pi-exclamation-triangle',
                    command :()=>{
                        alert("Hello");
                    }
                }
          
    ];


    const menuitems = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'Features',
            icon: 'pi pi-star'
        },
        {
            label: 'Projects',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Core',
                    icon: 'pi pi-bolt',
                    shortcut: '⌘+S',
                    template: itemRenderer
                },
                {
                    label: 'Blocks',
                    icon: 'pi pi-server',
                    shortcut: '⌘+B',
                    template: itemRenderer
                },
                {
                    label: 'UI Kit',
                    icon: 'pi pi-pencil',
                    shortcut: '⌘+U',
                    template: itemRenderer
                },
                {
                    separator: true
                },
                {
                    label: 'Templates',
                    icon: 'pi pi-palette',
                    items: [
                        {
                            label: 'Apollo',
                            icon: 'pi pi-palette',
                            badge: 2,
                            template: itemRenderer
                        },
                        {
                            label: 'Ultima',
                            icon: 'pi pi-palette',
                            badge: 3,
                            template: itemRenderer
                        }
                    ]
                }
            ]
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope',
            badge: 3,
            template: itemRenderer
        }
    ];

    const center = <div >
   <h2>  S.M.S.  </h2>
</div>

    const start = <div >
       
        <a href="#" onClick={()=>{
            document.getElementById('sidebar').classList.toggle('collapsed');
        }}><i className="pi pi-bars"></i></a>
        <span className='pl-4 hidden sm:inline-block'>SCHOOL MANAGEMENT SYSTEM</span>
    </div>
    const end = (
        <div className="flex align-items-center gap-2">
            
            <span className='font-bold '>Pushkar Singh Bisht</span>
            <Menu model={sidemenuitems} popup ref={menuRight} id="popup_menu_left" />
            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" onClick={(event) => menuRight.current.toggle(event)}/>
        </div>
    );
    return (
        <div className="">



<Toolbar  start={start}  end={end} className="p-2 mb-2 shadow-2"  />
<main>


<div id="sidebar" className={'collapsed ml-2 mt-2 border-1 border-50 border-round'} >
<Menu model={items} className="w-full" />
</div>
<div id="content p-2">

<div className="grid">
    <div className="col-12 md:col-6 lg:col-3">
        <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
                <div>
                    <span className="block text-500 font-medium mb-3">Orders</span>
                    <div className="text-900 font-medium text-xl">152</div>
                </div>
                <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                    <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                </div>
            </div>
            <span className="text-green-500 font-medium">24 new </span>
            <span className="text-500">since last visit</span>
        </div>
    </div>
    <div className="col-12 md:col-6 lg:col-3">
        <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
                <div>
                    <span className="block text-500 font-medium mb-3">Revenue</span>
                    <div className="text-900 font-medium text-xl">$2.100</div>
                </div>
                <div className="flex align-items-center justify-content-center bg-orange-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                    <i className="pi pi-map-marker text-orange-500 text-xl"></i>
                </div>
            </div>
            <span className="text-green-500 font-medium">%52+ </span>
            <span className="text-500">since last week</span>
        </div>
    </div>
    <div className="col-12 md:col-6 lg:col-3">
        <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
                <div>
                    <span className="block text-500 font-medium mb-3">Customers</span>
                    <div className="text-900 font-medium text-xl">28441</div>
                </div>
                <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                    <i className="pi pi-inbox text-cyan-500 text-xl"></i>
                </div>
            </div>
            <span className="text-green-500 font-medium">520  </span>
            <span className="text-500">newly registered</span>
        </div>
    </div>
    <div className="col-12 md:col-6 lg:col-3">
        <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
                <div>
                    <span className="block text-500 font-medium mb-3">Comments</span>
                    <div className="text-900 font-medium text-xl">152 Unread</div>
                </div>
                <div className="flex align-items-center justify-content-center bg-purple-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                    <i className="pi pi-comment text-purple-500 text-xl"></i>
                </div>
            </div>
            <span className="text-green-500 font-medium">85 </span>
            <span className="text-500">responded</span>
        </div>
    </div>
</div>
    
</div>

</main>





     
    
  
     
            {/* <Sidebar
                visible={visible}
                onHide={() => setVisible(false)}
                baseZIndex = {0}
                content={({ closeIconRef, hide }) => (
                    <Menu model={items} className="w-full p-2" />
                )}
            ></Sidebar> */}







        

        


        </div>
    )
}

export default Dashboard;