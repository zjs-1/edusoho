INSERT INTO `course_member` (`id`, `courseId`, `classroomId`, `joinedType`, `userId`, `orderId`, `deadline`, `refundDeadline`, `levelId`, `learnedNum`, `learnedCompulsoryTaskNum`, `credit`, `noteNum`, `noteLastUpdateTime`, `isLearned`, `finishedTime`, `seq`, `remark`, `isVisible`, `role`, `locked`, `deadlineNotified`, `createdTime`, `lastLearnTime`, `updatedTime`, `lastViewTime`, `courseSetId`, `stickyTime`) VALUES (1,1,0,'course',1,0,0,0,0,0,0,0,0,0,0,0,0,'',1,'teacher',0,0,1516008196,1547191524,1547193248,1547193248,1,0);
INSERT INTO `course_set_v8` (`id`, `type`, `title`, `subtitle`, `tags`, `categoryId`, `summary`, `goals`, `audiences`, `isVip`, `cover`, `status`, `creator`, `createdTime`, `updatedTime`, `serializeMode`, `ratingNum`, `rating`, `noteNum`, `studentNum`, `hotSeq`, `recommended`, `recommendedSeq`, `recommendedTime`, `orgId`, `orgCode`, `discountId`, `discountType`, `discount`, `hitNum`, `maxRate`, `materialNum`, `parentId`, `locked`, `minCoursePrice`, `maxCoursePrice`, `teacherIds`, `defaultCourseId`, `platform`) VALUES (1,'normal','课程管理说明（请务必完成学习！）','学习本课程后，可到【管理后台】-【课程】-【课程管理】中修改此课程的内容，或删除课程。','',0,'<p>请到该课程的管理页修改【课程信息】-【课程简介】。</p>\n','','',0,'{\"large\":\"public:\\/\\/default\\/2018\\/01-15\\/173111fa3f67352372.jpg\",\"middle\":\"public:\\/\\/default\\/2018\\/01-15\\/173111fa4abd521105.jpg\",\"small\":\"public:\\/\\/default\\/2018\\/01-15\\/173111fa5371918121.jpg\"}','published',1,1516008196,1547189447,'none',0,0,0,0,0,0,0,0,1,'1.',0,'discount',10.00,1,100,0,0,0,0.00,0.00,'|1|',1,'self');
INSERT INTO `course_task` (`id`, `courseId`, `fromCourseSetId`, `seq`, `categoryId`, `activityId`, `title`, `isFree`, `isOptional`, `startTime`, `endTime`, `status`, `createdUserId`, `createdTime`, `updatedTime`, `mode`, `isLesson`, `number`, `type`, `mediaSource`, `length`, `maxOnlineNum`, `copyId`, `migrateLessonId`, `syncId`) VALUES (1,1,1,8,1,1,'如何创建课程？',0,0,0,0,'published',1,1516008405,1547191578,'lesson',1,'4','text','',0,0,0,0,0),(2,1,1,10,2,2,'如何设置课程教师？',0,0,0,0,'published',1,1516008430,1547191578,'lesson',1,'5','text','',0,0,0,0,0),(3,1,1,14,3,3,'如何上传视频让学员学习？',0,0,0,0,'published',1,1516008459,1547191578,'lesson',1,'7','text','',0,0,0,0,0),(4,1,1,16,4,4,'如何添加作业练习和考试？',0,0,0,0,'published',1,1516008485,1547191578,'lesson',1,'8','text','',0,0,0,0,0),(5,1,1,18,5,5,'如何添加学习资料让学员下载？',0,0,0,0,'published',1,1516008522,1547191578,'lesson',1,'9','text','',0,0,0,0,0),(6,1,1,20,6,6,'管理员如何管理课程和设置教师权限？',0,0,0,0,'published',1,1516008543,1547191578,'lesson',1,'10','text','',0,0,0,0,0),(7,1,1,22,7,7,'如何查看课程订单和营收？',0,0,0,0,'published',1,1516008568,1547191578,'lesson',1,'11','text','',0,0,0,0,0),(8,1,1,24,8,8,'关闭课程与删除课程',0,0,0,0,'published',1,1516008595,1547191578,'lesson',1,'12','text','',0,0,0,0,0),(9,1,1,4,9,9,'班级、课程、教学计划、任务（课时）的关系',0,0,0,0,'published',1,1547190435,1547191578,'lesson',1,'2','text','',0,0,0,0,0),(10,1,1,6,10,10,'课程类型介绍：普通课程、直播课程、录播公开课、直播公开课',0,0,0,0,'published',1,1547190480,1547191578,'lesson',1,'3','text','',0,0,0,0,0),(11,1,1,12,11,11,'课程价格与加入设置',0,0,0,0,'published',1,1547190702,1547191578,'lesson',1,'6','text','',0,0,0,0,0),(12,1,1,2,12,12,'系统功能学习说明（网站管理员）',0,0,0,0,'published',1,1547191162,1547191578,'lesson',1,'1','text','',0,0,0,0,0);