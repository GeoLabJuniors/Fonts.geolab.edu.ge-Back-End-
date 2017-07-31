using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FontsGeolabEduGe.Models;

namespace FontsGeolabEduGe.Controllers
{
    public class HomeController : Controller
    {

        FontsEntities _db = new FontsEntities();

        // GET: Home
        public ActionResult Index()
        {
            var createDateRange = _db.CreateDateRanges.ToList();
            createDateRange.Insert(0, new CreateDateRange { ID = 0, CreateDateRange1 = "წლის მიხედვით" });
            ViewBag.createDateRange = createDateRange;
            ViewBag.selectedCreateDateRange = 0;


            var writing = _db.Writings.ToList();
            writing.Insert(0, new Writing { ID = 0, Writing1 = "დამწერლობის მიხედვით" });
            ViewBag.writing = writing;
            ViewBag.selectedWriting = 0;

            var model = new MultiplePV();
            model.Engineers = _db.Engineers.Take(16).ToList();
            model.Mentors = _db.Mentors.Take(5).ToList();
            model.Fonts = _db.Fonts.Take(6).ToList();
            return View(model);
        }

        public PartialViewResult Filter(int createDateRange, int writing, int type)
        {
            ViewBag.writing = (from item in _db.Writings
                               select item.ID).Distinct();

            ViewBag.date = (from item in _db.Fonts
                            select item.CreateDateRangeID).Distinct();

            ViewBag.fontId = (from item in _db.Fonts
                              select item.ID).Distinct();

            var response = from item in _db.Fonts
                           where item.CreateDateRangeID == createDateRange || createDateRange == 0
                           where item.FontTypeID == type || type == 0
                           where item.Font_Writing.Where(x => x.WritingID == writing).Any(w => w.FontID == item.ID) || writing == 0
                           select item;


            return PartialView("_Fonts", response);
        }

        public PartialViewResult EngineersAll()
        {
            var engineer = _db.Engineers.ToList();
            return PartialView("_Engineers", engineer);
        }

        public PartialViewResult MentorsAll()
        {
            var mentor = _db.Mentors.ToList();
            return PartialView("_Mentors", mentor);
        }

        public PartialViewResult FontsAll()
        {
            var font = _db.Fonts.ToList();
            return PartialView("_Fonts", font);
        }

        
    }
}