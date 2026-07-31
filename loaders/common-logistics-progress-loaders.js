const progressCss = `.vl-logistics-progress{width:min(240px,86vw);display:grid;gap:9px;padding:12px;border:1px solid #dfe6ee;border-radius:11px;background:#fff;color:#344054;font:700 11px/1.35 system-ui,sans-serif}.vl-logistics-progress-head{display:flex;justify-content:space-between;gap:10px}.vl-logistics-progress-head small{color:#98a2b3}.vl-logistics-progress-track{height:9px;border-radius:99px;background:#edf1f6;overflow:hidden}.vl-logistics-progress-track i{display:block;height:100%;width:var(--vl-progress,58%);border-radius:inherit;background:var(--loader-accent);transition:width .2s ease}.vl-logistics-progress-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:5px}.vl-logistics-progress-steps i{height:5px;border-radius:99px;background:#e5eaf1}.vl-logistics-progress-steps i.active{background:color-mix(in srgb,var(--loader-accent) 70%,#fff)}.vl-logistics-progress-meta{display:flex;justify-content:space-between;color:#667085;font-size:10px}`;

function makeProgressLoader({id,name,description,defaultLabel,controlLabel,options,defaultProgress=58}) {
  return {
    id,
    name,
    category:'Common UI',
    tech:'CSS + JavaScript',
    description,
    markup:`<div class="vl-logistics-progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${defaultProgress}"><div class="vl-logistics-progress-head"><strong class="vl-logistics-progress-title">${defaultLabel}</strong><small class="vl-logistics-progress-value">${defaultProgress}%</small></div><div class="vl-logistics-progress-track"><i style="--vl-progress:${defaultProgress}%"></i></div><div class="vl-logistics-progress-steps"><i class="active"></i><i class="active"></i><i></i><i></i></div><div class="vl-logistics-progress-meta"><span>Processing</span><span>Warehouse workflow</span></div></div>`,
    css:progressCss,
    controls:[
      {type:'range',key:'progress',label:'Progress',min:0,max:100,step:1,defaultValue:defaultProgress,full:true},
      {type:'select',key:'operation',label:controlLabel,defaultValue:options[0].value,full:true,options}
    ],
    applyControls(container,values){
      const value=Math.max(0,Math.min(100,Number(values.progress)||0));
      const root=container.querySelector('.vl-logistics-progress');
      const bar=container.querySelector('.vl-logistics-progress-track i');
      const label=container.querySelector('.vl-logistics-progress-value');
      const title=container.querySelector('.vl-logistics-progress-title');
      const selected=options.find(option=>option.value===values.operation);
      if(root) root.setAttribute('aria-valuenow',String(value));
      if(bar) bar.style.setProperty('--vl-progress',`${value}%`);
      if(label) label.textContent=`${value}%`;
      if(title) title.textContent=selected?.label||defaultLabel;
      container.querySelectorAll('.vl-logistics-progress-steps i').forEach((step,index)=>step.classList.toggle('active',value>index*25));
    },
    js:`AppLoader.setProgress = function (value) { const safe = Math.max(0, Math.min(100, Number(value) || 0)); const root = loaderElement.querySelector('.vl-logistics-progress'); const bar = loaderElement.querySelector('.vl-logistics-progress-track i'); const label = loaderElement.querySelector('.vl-logistics-progress-value'); if (root) root.setAttribute('aria-valuenow', String(safe)); if (bar) bar.style.setProperty('--vl-progress', safe + '%'); if (label) label.textContent = safe + '%'; };`
  };
}

export const commonLogisticsProgressLoaders = [
  makeProgressLoader({
    id:'stock-reservation-loader',
    name:'Stock Reservation Loader',
    description:'A stock-allocation loader for reserving quantities across warehouses, lots, and open sales orders.',
    defaultLabel:'Reserving stock',
    controlLabel:'Reservation operation',
    options:[
      {value:'reserve',label:'Reserving stock'},
      {value:'warehouse',label:'Selecting warehouse stock'},
      {value:'allocation',label:'Allocating order quantities'},
      {value:'shortage',label:'Checking stock shortage'}
    ]
  }),
  makeProgressLoader({
    id:'picking-progress-loader',
    name:'Picking Progress Loader',
    description:'A warehouse picking loader for bins, items, quantities, and pick-list completion.',
    defaultLabel:'Picking warehouse items',
    controlLabel:'Picking operation',
    options:[
      {value:'picking',label:'Picking warehouse items'},
      {value:'bins',label:'Locating storage bins'},
      {value:'scan',label:'Scanning picked items'},
      {value:'verify',label:'Verifying picked quantity'}
    ],
    defaultProgress:64
  }),
  makeProgressLoader({
    id:'shipment-tracking-loader',
    name:'Shipment Tracking Loader',
    description:'A shipment loader for carrier booking, dispatch, in-transit updates, and delivery confirmation.',
    defaultLabel:'Tracking shipment',
    controlLabel:'Shipment operation',
    options:[
      {value:'tracking',label:'Tracking shipment'},
      {value:'carrier',label:'Booking carrier'},
      {value:'dispatch',label:'Confirming dispatch'},
      {value:'delivery',label:'Waiting for delivery confirmation'}
    ],
    defaultProgress:72
  }),
  makeProgressLoader({
    id:'batch-trace-loader',
    name:'Batch Trace Loader',
    description:'A batch and serial trace loader for lot history, source documents, movements, and expiry records.',
    defaultLabel:'Tracing batch history',
    controlLabel:'Trace operation',
    options:[
      {value:'history',label:'Tracing batch history'},
      {value:'source',label:'Finding source documents'},
      {value:'movement',label:'Loading stock movements'},
      {value:'expiry',label:'Checking expiry records'}
    ],
    defaultProgress:46
  }),
  makeProgressLoader({
    id:'order-price-refresh-progress',
    name:'Order Price Refresh Progress',
    description:'A pricing loader for price lists, discounts, currency, tax, and transaction row totals.',
    defaultLabel:'Recalculating prices',
    controlLabel:'Pricing operation',
    options:[
      {value:'price',label:'Recalculating prices'},
      {value:'discount',label:'Applying customer discounts'},
      {value:'currency',label:'Converting transaction currency'},
      {value:'totals',label:'Updating document totals'}
    ],
    defaultProgress:81
  })
];