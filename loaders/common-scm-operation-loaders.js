const operationCss = `.vl-scm-loader{width:min(240px,86vw);display:grid;gap:9px;padding:12px;border:1px solid #dfe6ee;border-radius:11px;background:#fff;color:#344054;font:700 11px/1.35 system-ui,sans-serif}.vl-scm-loader-head{display:flex;align-items:center;gap:9px}.vl-scm-loader-ring{width:20px;height:20px;border:3px solid color-mix(in srgb,var(--loader-accent) 18%,transparent);border-top-color:var(--loader-accent);border-radius:50%;animation:vl-scm-spin calc(var(--loader-speed)*.75) linear infinite}.vl-scm-loader-copy{display:grid;gap:2px}.vl-scm-loader-copy small{color:#98a2b3;font-weight:600}.vl-scm-loader-track{height:7px;border-radius:99px;background:#edf1f6;overflow:hidden}.vl-scm-loader-track i{display:block;width:42%;height:100%;border-radius:inherit;background:var(--loader-accent);animation:vl-scm-track calc(var(--loader-speed)*1.5) ease-in-out infinite alternate}.vl-scm-loader-meta{display:flex;justify-content:space-between;color:#667085;font-size:10px}@keyframes vl-scm-spin{to{transform:rotate(360deg)}}@keyframes vl-scm-track{to{width:82%}}`;

function makeOperationLoader({id,name,description,defaultLabel,controlLabel,options}) {
  return {
    id,
    name,
    category:'Common UI',
    tech:'CSS + JavaScript',
    description,
    markup:`<div class="vl-scm-loader" role="status" aria-live="polite"><div class="vl-scm-loader-head"><span class="vl-scm-loader-ring" aria-hidden="true"></span><span class="vl-scm-loader-copy"><strong class="vl-scm-loader-title">${defaultLabel}</strong><small>Processing business rules and document data</small></span></div><div class="vl-scm-loader-track"><i></i></div><div class="vl-scm-loader-meta"><span>Validating</span><span>In progress</span></div></div>`,
    css:operationCss,
    controls:[{type:'select',key:'operation',label:controlLabel,defaultValue:options[0].value,full:true,options}],
    applyControls(container,values){
      const title=container.querySelector('.vl-scm-loader-title');
      const selected=options.find(option=>option.value===values.operation);
      if(title) title.textContent=selected?.label||defaultLabel;
    },
    js:`AppLoader.setMessage = function (message) { const target = loaderElement.querySelector('.vl-scm-loader-title'); if (target) target.textContent = message || '${defaultLabel}'; };`
  };
}

export const commonScmOperationLoaders = [
  makeOperationLoader({
    id:'purchase-order-processing-loader',
    name:'Purchase Order Processing Loader',
    description:'A procurement loader for validating vendor terms, prices, delivery dates, and purchase-order lines.',
    defaultLabel:'Preparing purchase order',
    controlLabel:'Purchase operation',
    options:[
      {value:'prepare',label:'Preparing purchase order'},
      {value:'vendor',label:'Validating vendor terms'},
      {value:'price',label:'Checking purchase prices'},
      {value:'approval',label:'Routing PO approval'}
    ]
  }),
  makeOperationLoader({
    id:'sales-order-confirmation-loader',
    name:'Sales Order Confirmation Loader',
    description:'A sales-order loader for confirming customer terms, stock, pricing, and fulfilment readiness.',
    defaultLabel:'Confirming sales order',
    controlLabel:'Sales operation',
    options:[
      {value:'confirm',label:'Confirming sales order'},
      {value:'stock',label:'Checking available stock'},
      {value:'terms',label:'Validating customer terms'},
      {value:'schedule',label:'Scheduling fulfilment'}
    ]
  }),
  makeOperationLoader({
    id:'delivery-preparation-loader',
    name:'Delivery Preparation Loader',
    description:'A delivery-order loader for preparing addresses, shipping marks, item quantities, and dispatch instructions.',
    defaultLabel:'Preparing delivery',
    controlLabel:'Delivery operation',
    options:[
      {value:'prepare',label:'Preparing delivery'},
      {value:'address',label:'Checking delivery address'},
      {value:'items',label:'Validating delivery items'},
      {value:'dispatch',label:'Creating dispatch instructions'}
    ]
  }),
  makeOperationLoader({
    id:'goods-receipt-loader',
    name:'Goods Receipt Loader',
    description:'A warehouse loader for receiving purchase goods, matching PO lines, and updating received quantities.',
    defaultLabel:'Receiving goods',
    controlLabel:'Receipt operation',
    options:[
      {value:'receive',label:'Receiving goods'},
      {value:'match',label:'Matching purchase order'},
      {value:'quantity',label:'Checking received quantity'},
      {value:'warehouse',label:'Updating warehouse stock'}
    ]
  }),
  makeOperationLoader({
    id:'credit-check-loader',
    name:'Credit Check Loader',
    description:'A customer-credit loader for limits, outstanding balances, overdue documents, and order exposure.',
    defaultLabel:'Checking credit limit',
    controlLabel:'Credit operation',
    options:[
      {value:'limit',label:'Checking credit limit'},
      {value:'balance',label:'Calculating outstanding balance'},
      {value:'overdue',label:'Checking overdue invoices'},
      {value:'exposure',label:'Calculating order exposure'}
    ]
  })
];