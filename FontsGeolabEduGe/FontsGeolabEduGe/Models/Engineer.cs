//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace FontsGeolabEduGe.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Engineer
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Engineer()
        {
            this.Font_Engineer = new HashSet<Font_Engineer>();
        }
    
        public int ID { get; set; }
        public string EngineerName { get; set; }
        public string EngineerPhoto { get; set; }
        public string Ext { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Font_Engineer> Font_Engineer { get; set; }
    }
}
